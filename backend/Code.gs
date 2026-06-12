/**
 * Elyx Solutions — Contact form backend (Google Apps Script)
 * --------------------------------------------------------------
 * Receives a POST from the website contact form, appends the
 * submission to a Google Sheet, and emails a notification.
 *
 * Full setup steps: see backend/SETUP.md
 */

// ----------------------------- CONFIG -----------------------------
var NOTIFY_EMAIL = 'elyxsolution@gmail.com'; // where notifications are sent
var SHEET_NAME   = 'Submissions';            // tab name inside the sheet
var SHEET_ID     = '';                        // optional: paste a Sheet ID to target a specific spreadsheet
// ------------------------------------------------------------------

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000); // avoid two submissions writing the same row

    var p = (e && e.parameter) ? e.parameter : {};

    // Honeypot: real users never see this field. If it's filled, it's a bot.
    if (p.company_website) return _json({ ok: true });

    var name    = String(p.name    || '').trim();
    var email   = String(p.email   || '').trim();
    var company = String(p.company || '').trim();
    var service = String(p.service || '').trim();
    var message = String(p.message || '').trim();

    if (!name || !email) return _json({ ok: false, error: 'Name and email are required.' });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return _json({ ok: false, error: 'Invalid email address.' });

    var sheet = _sheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Service', 'Message']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), name, email, company, service, message]);

    _notify(name, email, company, service, message);
    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
}

// Visiting the Web App URL in a browser hits this — handy health check.
function doGet() {
  return _json({ ok: true, service: 'Elyx contact form', usage: 'POST form-encoded data to submit.' });
}

function _sheet() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function _notify(name, email, company, service, message) {
  var subject = 'New enquiry — ' + name + (company ? ' (' + company + ')' : '');
  var rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
    ['Service', service || '—'],
    ['Message', message || '—']
  ];
  var html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0b1024;line-height:1.5">'
    + '<h2 style="margin:0 0 14px;font-size:18px">New contact form enquiry</h2>'
    + '<table cellpadding="6" style="border-collapse:collapse">';
  rows.forEach(function (r) {
    html += '<tr><td style="color:#8a90a6;vertical-align:top"><b>' + r[0] + '</b></td>'
         +  '<td style="vertical-align:top">' + _esc(r[1]) + '</td></tr>';
  });
  html += '</table><p style="color:#8a90a6;font-size:12px;margin-top:16px">'
       +  'Reply directly to this email to respond to ' + _esc(name) + '.</p></div>';

  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, replyTo: email, htmlBody: html });
}

function _esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
