// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuWrapper = document.querySelector('.menu-wrapper');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const body = document.body;
    const letterM = document.querySelector('.letter-m');

    // Открытие меню при клике на menu-wrapper или букву M
    menuWrapper.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });

    // Закрытие меню при клике на кнопку закрытия
    menuClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });

    // Закрытие меню при клике на overlay (фон)
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay || e.target.classList.contains('menu-overlay-background')) {
            closeMenu();
        }
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    function openMenu() {
        // Добавляем классы для анимации
        body.classList.add('menu-open');
        
        // Небольшая задержка для плавности
        setTimeout(() => {
            menuOverlay.classList.add('active');
            menuWrapper.classList.add('active');
        }, 10);
        
        // Блокируем скролл
        const scrollY = window.scrollY;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        menuWrapper.classList.remove('active');
        
        // Восстанавливаем скролл
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        
        // Убираем класс после завершения анимации
        setTimeout(() => {
            body.classList.remove('menu-open');
        }, 600);
    }

    // Плавная анимация для ссылок меню при открытии
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link, index) => {
        link.style.transitionDelay = `${0.3 + index * 0.1}s`;
        
        // Закрытие меню при клике на ссылку
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    });
});

