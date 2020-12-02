const todo = [
  { id: 1, todoValue: "Eat", edit: false },
  { id: 2, todoValue: "Sleep", edit: false },
  { id: 3, todoValue: "Code", edit: false },
  { id: 4, todoValue: "Repeat", edit: false },
];

const resolvers = {
  Query: {
    todos: () => todo,
  },
};

module.exports = resolvers;
