import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import './App.css';
import Moviecards from './Container/Moviecards/Moviecards';
import classes from './App.css';
import Item from './Components/Item/Item';
import { connect } from 'react-redux';

class App extends Component {

  changehandler = (index) => {
    const allLanguage = this.state.all;
    this.setState({
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
            {this.props.all.map((lang, index) => {
              return <Item  key={lang} clicked={()=>this.props.changehandler(lang)} title={lang} active={this.props.active}/>
            })}
          </div>  
          <Moviecards language={this.props.active}/>
        </main>    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    all: state.all,
    active: state.active
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    changehandler: (lang) => dispatch({type:'CHANGEACTIVE', language:lang})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
