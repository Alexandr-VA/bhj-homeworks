// Получаем элементы счётчика и печенья
const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

// Флаг для чередования размера: true – увеличено, false – уменьшено
let isEnlarged = false;

// Обработчик клика по изображению
cookie.addEventListener('click', function() {
    // Увеличиваем счётчик на 1
    counter.textContent = Number(counter.textContent) + 1;

    // Переключаем состояние размера
    isEnlarged = !isEnlarged;

    // Меняем масштаб изображения
    if (isEnlarged) {
        cookie.style.transform = 'scale(1.15)'; // увеличение на 20%
    } else {
        cookie.style.transform = 'scale(0.95)'; // уменьшение на 20%
    }
});
