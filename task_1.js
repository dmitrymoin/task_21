// Задание 1.

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const students = listNode.querySelectorAll('student');

const result = {
  list: []
};

students.forEach(studentNode => {
  const nameNode = studentNode.querySelector('name');
  const firstNode = nameNode.querySelector('first');
  const secondNode = nameNode.querySelector('second');
  const ageNode = studentNode.querySelector('age');
  const profNode = studentNode.querySelector('prof');
  
  const langAttr = nameNode.getAttribute('lang');
  
  const studentObj = {
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
  };

  result.list.push(studentObj);
});

console.log('result', result);
