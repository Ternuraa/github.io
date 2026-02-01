

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    // Отслеживаем движение мыши
    document.addEventListener('mousemove', function(e) {
        // Немедленное обновление позиции курсора
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Эффекты при наведении
    const interactiveElements = document.querySelectorAll(
        'a, button, .figure, .figure1, .p1, .hero-note, .hero-note1, .hero-note2, .hero-note3, .heart-icon, .menu-link, .menu-close, .menu-wrapper'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });

        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });

    // Управление видимостью
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });
});
