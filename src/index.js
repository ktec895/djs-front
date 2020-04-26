import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const client = new ApolloClient({
  uri: 'http://192.168.0.109:8080/graphql',
  clientState: {
    cache: new InMemoryCache(),
    defaults: {
      sidebarOpen: false,
      showId: ''
    },
    typeDefs,
    resolvers,
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
        <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();