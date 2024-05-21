import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import React from 'react';

// page & layout imports

import MovieDetails from './pages/MovieDetails'
import Category from './pages/Category'
import Footer from './components/Footer'
import Movies from './pages/Movies';
import Documentation from './pages/Documentation';
import FirstSteps from './pages/FirstSteps';
import ComponentsPage from './pages/ComponentsPage';
import Pages from './pages/Pages';

const client = new ApolloClient(
  {
    uri: 'https://vk-backend.rvhgsj.easypanel.host/graphql',
    cache: new InMemoryCache()
  }) 


function App() {
  return (
    <Router>
      <ApolloProvider client={client}> 
        <div className="App">
          
          <Routes>
              <Route exact path="/" element={<Movies />}/>
              <Route exact path="/movie/:slug" element={<MovieDetails />}/>
              <Route exact path="/category/:slug" element={<Category />}/>
              <Route exact path="/documentation" element={<Documentation />}/>
              <Route exact path="/first-steps" element={<FirstSteps />}/>
              <Route exact path="/components" element={<ComponentsPage />}/>
              <Route exact path="/pages" element={<Pages />}/>
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
