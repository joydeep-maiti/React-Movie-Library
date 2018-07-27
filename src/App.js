import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import classes from './App.css';
import Cards from './Container/Cards/Cards';
import Collection from './Container/Collection/Collection';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header className={classes.myheader}>
            <img src={logo} alt="Movielogo" className={classes.logo} />
            <div>
              <NavLink className={classes.link} to='/'>Home</NavLink>
              <NavLink className={classes.link} to='/mycollection'>My Collection</NavLink>
            </div>
          </header>
          <main>
            <Route exact path="/" component={Cards} />
            <Route exact path="/mycollection" component={Collection} />
          </main>    
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
