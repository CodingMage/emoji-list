import React from 'react';
import './App.css';
import EmojiFetcher from './Components/EmojiFetcher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wraper">

        <Router>

          {/* I want to create a nav section */}
          <div className="nav">
            <Link to='/smileys-emotion'><span role='img' aria-label="smileys-emotion">🙂</span> </Link >
            <Link to='/people-body'><span role='img' aria-label="people-body">👨</span> </Link >
            <Link to='/animals-nature'><span role='img' aria-label="animals-nature">🦁</span> </Link >
            <Link to='/food-drink'><span role='img' aria-label="food-drink">🍏</span> </Link >
            <Link to='/activities'><span role='img' aria-label="activities">⚽</span> </Link >
            <Link to='/travel-places'><span role='img' aria-label="travel-places">🚗</span> </Link >
            <Link to='/objects'><span role='img' aria-label="objects">💡</span> </Link >
            <Link to='/flags'><span role='img' aria-label="flags">🏁</span> </Link >

          </div>

          <Switch>

            <Route exact path='/'>
              <EmojiFetcher group='smileys-emotion' />

            </Route>
            <Route path='/people-body'>
              <EmojiFetcher group='people-body' />

            </Route>
            <Route path='/animals-nature'>
              <EmojiFetcher group='animals-nature' />

            </Route>
            <Route path='/food-drink'>
              <EmojiFetcher group='food-drink' />

            </Route>
            <Route path='/activities'>
              <EmojiFetcher group='activities' />

            </Route>
            <Route path='/travel-places'>
              <EmojiFetcher group='travel-places' />

            </Route>
            <Route path='/objects'>
              <EmojiFetcher group='objects' />

            </Route>
            <Route path='/flags'>
              <EmojiFetcher group='flags' />

            </Route>
          </Switch>

        </Router>
      </div>


    </div>
  );
}

export default App;
