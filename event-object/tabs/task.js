// Находим все контейнеры с вкладками (класс "tabs")
const tabsContainers = document.querySelectorAll('.tabs');

// Перебираем каждый контейнер
tabsContainers.forEach(container => {
  // Находим все вкладки внутри контейнера
  const tabs = container.querySelectorAll('.tab');
  // Находим все панели с содержимым внутри контейнера
  const contents = container.querySelectorAll('.tab__content');

  // Добавляем обработчик клика на каждую вкладку
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Находим индекс текущей вкладки
      const index = Array.from(tabs).indexOf(tab);

      // Снимаем класс активности со всех вкладок
      tabs.forEach(t => t.classList.remove('tab_active'));
      // Активируем текущую вкладку
      tab.classList.add('tab_active');

      // Снимаем класс активности со всех панелей
      contents.forEach(c => c.classList.remove('tab__content_active'));
      // Активируем панель с соответствующим индексом
      if (contents[index]) {
        contents[index].classList.add('tab__content_active');
      }
    });
  });
});
