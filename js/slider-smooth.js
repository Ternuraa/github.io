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

    console.log(`Starting slider ${sliderConfig.id} with ${pics.length} images`);

    // Функция для переключения на следующую картинку
    function switchToNextImage() {
        i = (i + 1) % pics.length; // Переходим к следующей картинке по кругу
        el.src = pics[i]; // Мгновенно меняем src
        console.log(`Slider ${sliderConfig.id} switched to image ${i}: ${pics[i]}`);
    }

    // Запускаем интервал для автоматической смены
    setInterval(switchToNextImage, 2000); // Меняем каждую секунду

    // Первое переключение через 1 секунду
    setTimeout(switchToNextImage, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing simple sliders...');

    slidersConfig.forEach(sliderConfig => {
        const el = document.getElementById(sliderConfig.id);
        if (el) {
            startSimpleSlider(sliderConfig);
        } else {
            console.error(`Slider element ${sliderConfig.id} not found!`);
        }
    });
});
