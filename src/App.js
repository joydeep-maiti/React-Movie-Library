import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import './App.css';
import Moviecards from './Container/Moviecards/Moviecards';
import classes from './App.css';
import Item from './Components/Item/Item';

class App extends Component {
  state = {
    all: ['English','Hindi', 'Bengali', 'Tamil', 'Telugu'],
    language: 'Hindi',
    active: 'Hindi'
  }

  changehandler = (index) => {
    const allLanguage = this.state.all;
    this.setState({
      language: allLanguage[index],
      active: allLanguage[index]
    })
  }
  render() {
    return (
      <div className={classes.App}>
        <header>
          <img src={logo} alt="Movielogo" className={classes.logo}/>
        </header>
        <main className={classes.main}>
          <div className={classes.sidebar}>
            {this.state.all.map((lang, index) => {
              return <Item  key={lang} clicked={() => this.changehandler(index)} title={lang} active={this.state.active}/>
            })}
          </div>  
          <Moviecards language={this.state.language}/>
        </main>
          
      </div>
    );
  }
}

export default App;
