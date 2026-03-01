const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let startTime = null; // время первого клика

// Функция для получения лунки по индексу (1–9)
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Форматирование времени (для сообщения)
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return minutes > 0 ? `${minutes} мин ${seconds} сек` : `${seconds} сек`;
}

// Назначаем обработчик для каждой лунки
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
        // Запоминаем время первого клика, если ещё не начали
        if (startTime === null) {
            startTime = Date.now();
        }

        // Проверяем, есть ли крот в лунке
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = +dead.textContent + 1;
        } else {
            lost.textContent = +lost.textContent + 1;
        }

        // Проверка победы (10 убитых)
        if (dead.textContent === '10') {
            const endTime = Date.now();
            alert(`Победа! Вы убили 10 кротов за ${formatTime(endTime - startTime)}.`);
            dead.textContent = 0;
            lost.textContent = 0;
            startTime = null;
        }
        // Проверка поражения (5 промахов)
        else if (lost.textContent === '5') {
            const endTime = Date.now();
            alert(`Поражение! 5 промахов за ${formatTime(endTime - startTime)}.`);
            dead.textContent = 0;
            lost.textContent = 0;
            startTime = null;
        }
    };
}
