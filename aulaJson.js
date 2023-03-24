const todos = [
  {
    id: 1,
    description: "estudar JavaScript",
    iscompleted: true,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

// transformando o objeto em Json

const todosJson = JSON.stringify(todos);
const todoslist = JSON.parse(todosJson);
console.log(todoslist);
