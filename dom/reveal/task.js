// Ждём полной загрузки DOM, чтобы найти все .reveal
document.addEventListener('DOMContentLoaded', function() {
  const revealBlocks = document.querySelectorAll('.reveal');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    revealBlocks.forEach(block => {
      const { top, bottom } = block.getBoundingClientRect();

      // Элемент виден, если его нижняя граница ниже верхней границы окна
      // и верхняя граница выше нижней границы окна
      if (bottom > 0 && top < windowHeight) {
        block.classList.add('reveal_active');
      } else {
        block.classList.remove('reveal_active');
      }
    });
  }

  // Проверяем при прокрутке
  window.addEventListener('scroll', checkVisibility);

  // И сразу после загрузки, чтобы показать уже видимые элементы
  checkVisibility();
});
