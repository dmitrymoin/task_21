// Задание 6.

const btn = document.querySelector('.btn');
const taskList = document.querySelector('.list');

// Функция для отображения изображений
function displayImages(images) {
  taskList.innerHTML = ''; // Очищаем содержимое списка
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image.download_url;
    img.alt = image.author;
    img.classList.add('image'); //добавляем класс 'image' для стилизации (стиль задаётся в html)
    taskList.appendChild(img);
  });
}

// Функция для загрузки изображений из localStorage
function localStorageLoad() {
  const savedData = localStorage.getItem('images');
  if (savedData) {
    const images = JSON.parse(savedData);
    displayImages(images);
  }
}

btn.addEventListener('click', function() {
  const page = document.querySelector('#page').value;
  const limit = document.querySelector('#limit').value;

// Проверка корректности введенных значений
  const checkPage = isNaN(page) || page < 1 || page > 10;
  const checkLimit = isNaN(limit) || limit < 1 || limit > 10;

  if (checkPage && checkLimit) {
    taskList.innerHTML = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>';
  } else if (checkPage) {
    taskList.innerHTML = '<p>Номер страницы вне диапазона от 1 до 10</p>';
  } else if (checkLimit) {
    taskList.innerHTML = '<p>Лимит вне диапазона от 1 до 10</p>';
  } else {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

// Запрос к API
    fetch(url)
      .then(response => response.json()) // Парсим ответ в JSON
      .then(data => {
        displayImages(data); // Отображаем изображения
        localStorage.setItem('images', JSON.stringify(data)); // Сохраняем данные в localStorage
      })
// Обработка возможных ошибок запроса
      .catch(error => {
        taskList.innerHTML = '<p>Произошла ошибка!</p>';
      });
  }
});

// Загрузка изображений из localStorage
localStorageLoad();

