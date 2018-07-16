import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Movielogo" className={classes.logo}/>
          <Sidebar />
        </header>
        
      </div>
    );
  }
}

export default App;
