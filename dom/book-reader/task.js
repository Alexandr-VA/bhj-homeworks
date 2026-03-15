document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');

  // ------------------ Управление размером шрифта ------------------
  const fontSizes = document.querySelectorAll('.font-size');
  fontSizes.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // отменяем переход по ссылке

      // Снимаем активность со всех кнопок размера
      fontSizes.forEach(el => el.classList.remove('font-size_active'));
      btn.classList.add('font-size_active');

      // Определяем, какой размер выбран
      let sizeClass = '';
      if (btn.classList.contains('font-size_small')) {
        sizeClass = 'book_fs-small';
      } else if (btn.classList.contains('font-size_big')) {
        sizeClass = 'book_fs-big';
      }

      // Удаляем предыдущие классы размера у книги
      book.classList.remove('book_fs-small', 'book_fs-big');
      if (sizeClass) {
        book.classList.add(sizeClass);
      }
    });
  });

  // ------------------ Управление цветом текста и фона ------------------
  // Находим все блоки управления цветом (текст и фон)
  const colorControls = document.querySelectorAll('.book__control_color, .book__control_background');

  colorControls.forEach(control => {
    const colorLinks = control.querySelectorAll('.color');

    colorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // 1. Убираем класс активности у всех ссылок в текущем блоке
        colorLinks.forEach(l => l.classList.remove('color_active'));
        // 2. Активируем кликнутую ссылку
        link.classList.add('color_active');

        // 3. Определяем, что именно меняем: текст или фон
        const isText = control.classList.contains('book__control_color');
        const prefix = isText ? 'book_color-' : 'book_bg-';

        // 4. Получаем значение из соответствующего data-атрибута
        let value;
        if (isText) {
          value = link.dataset.textColor; // data-text-color
        } else {
          value = link.dataset.bgColor;    // data-bg-color
        }

        // 5. Удаляем у книги все классы, начинающиеся с этого префикса
        const classesToRemove = Array.from(book.classList).filter(cls => cls.startsWith(prefix));
        book.classList.remove(...classesToRemove);

        // 6. Добавляем новый класс, если значение получено
        if (value) {
          book.classList.add(prefix + value);
        }
      });
    });
  });

  // ------------------ Инициализация при загрузке страницы ------------------
  // Устанавливаем классы книги согласно уже активным элементам в разметке

  // Размер шрифта
  const activeFont = document.querySelector('.font-size_active');
  if (activeFont) {
    if (activeFont.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
    } else if (activeFont.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
    }
  }

  // Цвет текста и фон
  colorControls.forEach(control => {
    const activeLink = control.querySelector('.color_active');
    if (activeLink) {
      const isText = control.classList.contains('book__control_color');
      const prefix = isText ? 'book_color-' : 'book_bg-';
      let value;
      if (isText) {
        value = activeLink.dataset.textColor;
      } else {
        value = activeLink.dataset.bgColor;
      }
      if (value) {
        book.classList.add(prefix + value);
      }
    }
  });
});
