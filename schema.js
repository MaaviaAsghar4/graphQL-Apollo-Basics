const { gql } = require("apollo-server");


const typeDefs = gql`
  type Todo {
    id: Int!
    todoValue: String!
  }
  type Query {
    todos: [Todo],
  }
`;

module.exports = typeDefs