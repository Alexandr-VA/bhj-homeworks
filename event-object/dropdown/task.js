document.addEventListener('DOMContentLoaded', function() {
// Находим все выпадающие списки на странице
const dropdowns = document.querySelectorAll('.dropdown');

// Для каждого dropdown настраиваем обработчики
dropdowns.forEach(function(dropdown) {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');
  const links = dropdown.querySelectorAll('.dropdown__link');

// Обработчик клика по кнопке (открыть/закрыть список)
  valueElement.addEventListener('click', function(event) {
// Переключаем класс активности списка
  listElement.classList.toggle('dropdown__list_active');
});

// Обработчик клика по каждому пункту списка
  links.forEach(function(link) {
  link.addEventListener('click', function(event) {
// Запрещаем переход по ссылке
  event.preventDefault();

// Получаем текст выбранного пункта (обрезаем лишние пробелы)
  const selectedText = link.textContent.trim();

// Устанавливаем этот текст в кнопку
  valueElement.textContent = selectedText;

// Закрываем список
  listElement.classList.remove('dropdown__list_active');
     });
    });
  });
});
