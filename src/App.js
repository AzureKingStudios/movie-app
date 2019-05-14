import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header.js';
import MainPage from './containers/MainPage.js';
import SearchPage from './containers/SearchPage.js';

function App() {
  return (
    <div className="App">
      {/*this route is for the root of the site */}
      <Route exact path='/' render={(props) => (
        <div>
          <Header/>
          <MainPage {...props}/>
        </div>
      )}/>
      {/* this route returns the search results for the movies*/}
      <Route path='/search' render={(props) => (
          <SearchPage {...props}/>
      )}/>
      {/*this route shows the movie details */}
      <Route path='/movie' render={() => (
          <div>
            movie details here
          </div>
      )}/>
    </div>
  );
}

export default App;
