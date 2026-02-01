document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('.scroll-words');
  if (!root) return;

  var textEl = root.querySelector('[data-scroll-words]');
  if (!textEl) return;

  // Устанавливаем ваш новый текст
  var newText = "Представьте процесс разработки, где вы всегда в курсе каждого изменения. Вместе мы создадим интерфейс, который по-настоящему решит задачи ваших пользователей. Прозрачность на каждом этапе, оперативная связь и полное погружение в ваш проект";

  // Устанавливаем новый текст и разбиваем на слова
  textEl.textContent = newText;
  var original = textEl.textContent.trim().replace(/\s+/g, ' ');
  var words = original.split(' ');
  textEl.innerHTML = words.map(function (w) {
    return '<span class="w">' + w + '</span>';
  }).join(' ');

  var wordEls = Array.prototype.slice.call(textEl.querySelectorAll('.w'));

  // Reveal words based on scroll progress within the section
  var onScroll = function () {
    var rect = root.getBoundingClientRect();
    var vh = window.innerHeight;

    // Исправленный расчет прогресса
    var progress = 1 - (rect.top + rect.height) / (vh + rect.height);
    progress = Math.pow(progress, 0.75);
    progress = Math.max(0, Math.min(1, progress));

    var revealCount = Math.floor(progress * wordEls.length);

    for (var i = 0; i < wordEls.length; i++) {
      if (i < revealCount) {
        wordEls[i].classList.add('is-visible');
      } else {
        wordEls[i].classList.remove('is-visible');
      }
    }
  };

  var rAF = null;

  var requestTick = function () {
    if (rAF === null) {
      rAF = window.requestAnimationFrame(function () {
        rAF = null;
        onScroll();
      });
    }
  };

  onScroll();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
});
