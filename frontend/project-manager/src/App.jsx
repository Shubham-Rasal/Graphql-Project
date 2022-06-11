import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Project from './pages/Project'
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }

          },
          projects:{
            merge(existing, incoming) {
              return incoming;
            }
          }
        },
      },
    },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});





function App() {
  
  return (
    <>
     <ApolloProvider client={client}>
      <Router>

     <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project/:id' element={<Project/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      </Router>
     </ApolloProvider>
    </>
  )
}

export default App
