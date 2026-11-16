/* Blog listing: filter the article cards by category pill. Without JS every card simply stays visible. */
(function () {
  var pills = document.querySelectorAll('.bl__pill');
  var items = document.querySelectorAll('.bl__li');
  if (!pills.length) return;
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var cat = pill.getAttribute('data-cat');
      pills.forEach(function (p) {
        var on = p === pill;
        p.classList.toggle('is-on', on);
        p.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      items.forEach(function (li) {
        li.hidden = !(cat === 'all' || li.getAttribute('data-cat') === cat);
      });
    });
  });
})();
