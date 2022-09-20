import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

type Props = {};

const jsonGraphqlClient = new ApolloClient({
  uri: 'http://localhost:8000/',
  cache: new InMemoryCache(),
});

const apolloServerClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const Root = (props: Props) => (
  <ApolloProvider client={apolloServerClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

export default Root;
