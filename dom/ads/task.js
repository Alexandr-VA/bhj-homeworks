document.addEventListener('DOMContentLoaded', () => {
  // Находим все контейнеры ротаторов на странице
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    // Собираем все элементы с текстом внутри текущего ротатора
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    if (cases.length === 0) return;

    // Определяем индекс активного элемента (с классом rotator__case_active)
    let activeIndex = cases.findIndex(item => item.classList.contains('rotator__case_active'));

    // Если активный не найден, активируем первый
    if (activeIndex === -1) {
      activeIndex = 0;
      cases[0].classList.add('rotator__case_active');
    }

    // Переменная для хранения идентификатора текущего таймера
    let timerId;

    // Функция переключения на следующий текст
    function switchToNext() {
      // Убираем класс у текущего активного элемента
      cases[activeIndex].classList.remove('rotator__case_active');

      // Вычисляем индекс следующего элемента (с зацикливанием)
      activeIndex = (activeIndex + 1) % cases.length;

      // Получаем новый активный элемент
      const newActive = cases[activeIndex];
      newActive.classList.add('rotator__case_active');

      // Устанавливаем цвет текста из data-color (если указан)
      const color = newActive.dataset.color;
      if (color) {
        newActive.style.color = color;
      }

      // Читаем скорость показа для нового элемента (из data-speed)
      const speed = parseInt(newActive.dataset.speed, 10) || 1000;

      // Запускаем таймер для следующего переключения
      timerId = setTimeout(switchToNext, speed);
    }

    // Инициализация первого активного элемента
    const firstActive = cases[activeIndex];
    const initialColor = firstActive.dataset.color;
    if (initialColor) {
      firstActive.style.color = initialColor;
    }

    // Запускаем первый таймер, используя скорость начального элемента
    const initialSpeed = parseInt(firstActive.dataset.speed, 10) || 1000;
    timerId = setTimeout(switchToNext, initialSpeed);
  });
});
