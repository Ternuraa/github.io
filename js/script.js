document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal-from-top');

  if (!revealElements.length) {
    return;
  }

  revealElements.forEach(function (element) {
    const delay = element.dataset.revealDelay;
    if (typeof delay === 'string' && delay.trim().length) {
      element.style.setProperty('--reveal-delay', delay.trim());
    }
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries, observerInstance) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
});

