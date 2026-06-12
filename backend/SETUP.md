# Contact form backend — setup (≈5 minutes)

The website contact form posts to a **Google Apps Script Web App** that:
1. Appends each submission as a row in a **Google Sheet**, and
2. Emails a **notification** to `elyxsolution@gmail.com`.

No server, no paid services, no secrets stored in this repo.

---

## 1. Create the Google Sheet
1. Go to <https://sheets.google.com> and create a new blank spreadsheet.
2. Name it something like **"Elyx — Contact submissions"**.
   (You don't need to add headers — the script creates them on the first submission.)

## 2. Add the Apps Script
1. In that sheet: **Extensions → Apps Script**.
2. Delete any starter code, then paste the entire contents of [`Code.gs`](./Code.gs).
3. (Optional) Change `NOTIFY_EMAIL` at the top if you want notifications elsewhere.
4. Click **Save** (💾).

## 3. Deploy as a Web App
1. Click **Deploy → New deployment**.
2. Click the gear ⚙ next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** `Elyx contact form`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`  ← important, so the website can reach it
4. Click **Deploy**.
5. **Authorize access** when prompted (pick your Google account → Advanced → "Go to … (unsafe)" → Allow). This is normal for your own script.
6. Copy the **Web app URL** — it looks like:
   `https://script.google.com/macros/s/AKfy....../exec`

## 4. Connect the website
In [`../contact.html`](../contact.html), find this near the bottom and paste your URL:

```html
<script>window.ELYX_CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfy....../exec";</script>
```

Commit + push. Done — the live form now writes to your Sheet and emails you.

---

## Testing
- **Quick check:** open the Web app URL in a browser. You should see
  `{"ok":true,"service":"Elyx contact form",...}`.
- **Full check:** submit the form on the site. A row should appear in the Sheet and an email should arrive within a few seconds (check spam the first time).
- Before the URL is set, the form shows the success message **without** sending (demo mode) and logs a warning in the browser console.

## Notes
- **Fields stored:** Timestamp, Name, Email, Company, Service, Message. (Budget was removed.)
- **Spam:** a hidden honeypot field (`company_website`) silently drops bots.
- **Replying:** the notification email's reply-to is the sender's address, so you can reply straight from your inbox.
- **Updating the script later:** after editing `Code.gs` in Apps Script, you must **Deploy → Manage deployments → edit → Deploy** again (or create a new version) for changes to go live. The URL stays the same if you edit the existing deployment.
- **Limits:** Gmail/Apps Script free tier allows ~100 emails/day — far beyond contact-form volume.
