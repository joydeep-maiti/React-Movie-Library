import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Moviecards from './Container/Moviecards/Moviecards';
import classes from './App.css';

class App extends Component {
  state = {
    language: 'Hindi',
  }

  changehandler = (props) => {
    console.log('props:',props);
  }
  render() {
    return (
      <div className={classes.App}>
        <header>
          <img src={logo} alt="Movielogo" className={classes.logo}/>
        </header>
        <main className={classes.main}>
          <Sidebar onClicked={(event) => this.changehandler()}/>
          <Moviecards language={this.state.language}/>
        </main>
          
      </div>
    );
  }
}

export default App;
