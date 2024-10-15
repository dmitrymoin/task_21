// Задание 5.

document.querySelector('.btn').addEventListener('click', function() {
  const userId = document.querySelector('#input').value;
  const taskList = document.querySelector('.list');
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

// Запрос к API
  fetch(url)
      .then(response => response.json()) // Парсим ответ в JSON
      .then(data => {
          taskList.innerHTML = ''; // Очищаем содержимое списка

// Проверяем, есть ли задачи у пользователя (пустой массив указывает на несуществующего пользователя)
          if (data.length === 0) {
              taskList.innerHTML = '<p>Пользователь с указанным id не найден!</p>';
          } else {
// Создаём список
              const ul = document.createElement('ul');
              data.forEach(task => {
                  const li = document.createElement('li');
                  li.textContent = task.title;

// Если задача выполнена, добавляем класс 'completed' для зачёркивания текста (стиль задаётся в html)
                  if (task.completed) {
                      li.classList.add('completed');
                  }
                  ul.appendChild(li);
              });
              taskList.appendChild(ul);
          }
      })
// Обработка возможных ошибок запроса
      .catch(error => {
          taskList.innerHTML = '<p>Произошла ошибка!</p>';
      });
});
