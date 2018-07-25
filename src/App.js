import React, { Component } from 'react';
import logo from './assets/Movie.jpg';
import './App.css';
import Moviecards from './Container/Moviecards/Moviecards';
import classes from './App.css';
import Item from './Components/Item/Item';
import { connect } from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header>
            <img src={logo} alt="Movielogo" className={classes.logo}/>
            <h2> <NavLink to='/'>Home</NavLink> </h2>
            <h2> <NavLink to='/web'>web</NavLink> </h2>
          </header>
          <main className={classes.main}>
            <div className={classes.sidebar}>
              {this.props.all.map((lang, index) => {
                return <Item  key={lang} clicked={()=>this.props.changehandler(lang)} title={lang} active={this.props.active}/>
              })}
            </div>  
            <Moviecards language={this.props.active}/>
            <div>
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route path="/web" render={() => <div>Web</div>} />
            </div>
          </main>    
        </div>
        
      </BrowserRouter>
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
