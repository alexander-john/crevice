// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// initialize apollo client
const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',    // url of graph server
    cache: new InMemoryCache(),
});

// const client = ...

// query
client
    .query({
        query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
    })
    .then((result) => console.log(result));

// connect client to react
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);
