import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, from, HttpLink } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { App } from './App'
import { createRoot } from 'react-dom/client'
import Context from './context'
import { setContext } from '@apollo/client/link/context'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors)
  console.log(networkError)

  if (graphQLErrors && graphQLErrors[0].message === 'you must be logged in to perform this action' || graphQLErrors[0].message === 'user does not exist') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/login'
  }
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/login'
  };
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: from([
    authLink,
    errorLink,
    new HttpLink({
      uri: 'https://api-petgram-875dq86v1-delegado007.vercel.app/graphql'
    })
  ]),
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
