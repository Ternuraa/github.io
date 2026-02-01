document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.works-stripes');
  if (!section) return;

  var preview = section.querySelector('.work-preview');
  var previewImg = preview ? preview.querySelector('img') : null;
  var rows = Array.prototype.slice.call(section.querySelectorAll('.work-row'));

  function showPreviewFor(row, e) {
    if (!preview || !previewImg) return;
    var img = row.getAttribute('data-image');
    if (img) previewImg.src = img;
    positionPreview(e);
    preview.classList.add('is-visible');
  }

  function hidePreview() {
    if (preview) preview.classList.remove('is-visible');
  }

  function positionPreview(e) {
    if (!preview) return;
    var offsetY = 16; // отступ над курсором
    preview.style.left = e.clientX + 'px';
    preview.style.top = (e.clientY - offsetY) + 'px';
  }

  rows.forEach(function (row) {
    row.addEventListener('mouseenter', function (e) { showPreviewFor(row, e); });
    row.addEventListener('mousemove', function (e) { positionPreview(e); });
    row.addEventListener('mouseleave', hidePreview);
    row.addEventListener('click', function () {
      var href = row.getAttribute('data-link');
      if (href) window.location.href = href;
    });
  });
});
