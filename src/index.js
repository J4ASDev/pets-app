import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Context from './Context';
import Application from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server.midudev.now.sh/graphql',
  request: operation => {
    const token = sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}` : '';

    operation.setContext({
      headers: {
        authorization
      }
    });
  },
  onError: error => {
    const { networkError } = error;

    if(networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token');
      location.href = '/';
    }
  }
});

render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <Application />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app')
);
