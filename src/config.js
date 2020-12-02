import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httplink = createHttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache(),
});

export default client;
