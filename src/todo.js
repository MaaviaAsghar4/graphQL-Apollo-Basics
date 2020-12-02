import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_TODOS = gql`
  query getTodo {
    todos {
      id
      todoValue
    }
  }
`;

const Todo = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error);
  }
  const { todos } = data;
  return (
    <div>
      {todos?.map((todo, index) => {
        return <div key={index}>{todo.todoValue}</div>;
      })}
    </div>
  );
};

export default Todo;
