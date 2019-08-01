import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Context from './Context';
import Application from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server.midudev.now.sh/graphql'
});

render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <Application />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app')
);
