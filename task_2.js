// Задание 2.

// Дан образец JSON-строки:
// {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

const person = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000
};

const jsonString = JSON.stringify(person);
console.log(jsonString);