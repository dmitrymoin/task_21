// Задание 3.

const userSession = () => {
  const savedData = localStorage.getItem('userData');
  const date = new Date();
  // Если данных нет, запрашиваем имя пользователя
  if (savedData === null) {
    const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    // Создаем объект с именем и датой последнего визита
    if (userName) {
      const userData = {
        name: userName,
        lastVisit: date.toLocaleString()
      };
    // Сохраняем данные в localStorage
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  } else {
    // Если данные уже есть в localStorage - парсим
    const parsedData = JSON.parse(savedData);
    alert(`Добрый день, ${parsedData.name}! Давно не виделись. В последний раз вы были у нас ${parsedData.lastVisit}`);
    // Обновляем дату последнего визита
    parsedData.lastVisit = date.toLocaleString();
    localStorage.setItem('userData', JSON.stringify(parsedData));
  }
};

userSession();



