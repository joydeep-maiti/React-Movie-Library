import React, { Component } from 'react';
import Moviecards from '../Moviecards/Moviecards';
import Item from '../../Components/Item/Item';
import classes from './Cards.css';
import { connect } from 'react-redux';

class Cards extends Component {
    render() {
        return(
            <div className={classes.main}>
                <div className={classes.sidebar}>
                    {this.props.all.map((lang, index) => {
                        return <Item key={lang} clicked={() => this.props.changehandler(lang)} title={lang} active={this.props.active} />
                    })}
                </div>
                <Moviecards language={this.props.active} />
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        all: state.all,
        active: state.active
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changehandler: (lang) => dispatch({ type: 'CHANGEACTIVE', language: lang })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);