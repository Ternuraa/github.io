// slider-with-reveal.js
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const slidersConfig = [
    {
        id: 'slider1',
        images: [
            'images/project1-1.jpg',
            'images/project1-2.jpg',
            'images/project1-3.jpg'
        ]
    },
    {
        id: 'slider2',
        images: [
            'images/project2-1.jpg',
            'images/project2-2.jpg',
            'images/project2-3.jpg'
        ]
    },
    {
        id: 'slider3',
        images: [
            'images/project3-1.jpg',
            'images/project3-2.jpg',
            'images/project3-3.jpg'
        ]
    }
];

function startSimpleSlider(sliderConfig) {
    const el = document.getElementById(sliderConfig.id);
    const pics = sliderConfig.images;
    let i = 0;

    function switchToNextImage() {
        i = (i + 1) % pics.length;
        el.src = pics[i];

        // Добавляем легкую анимацию при каждой смене
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = 'quickReveal 0.3s ease-out';
        }, 10);
    }

    // Запускаем слайдер после завершения начальной анимации
    setTimeout(() => {
        setInterval(switchToNextImage, 1000);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing sliders with reveal animation...');

    slidersConfig.forEach(sliderConfig => {
        const el = document.getElementById(sliderConfig.id);
        if (el) {
            startSimpleSlider(sliderConfig);
        }
    });
});
