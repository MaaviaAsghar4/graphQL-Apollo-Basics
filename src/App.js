import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./config";
import Todo from "./todo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Todo />
    </ApolloProvider>
  );
}

export default App;
