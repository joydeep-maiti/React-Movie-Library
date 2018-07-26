import React, { Component } from 'react';
import Moviecards from '../Moviecards/Moviecards';
import Item from '../../Components/Item/Item';
import classes from './Cards.css';
import { connect } from 'react-redux';
import Modal from '../../Components/Modal/Modal';

class Cards extends Component {
    // modalData = null;
    // showModal (key) {
    //     console.log('key',key);
    //     modalData= key;
    // }
    render() {
        return(
            <div className={classes.main}>
                <div className={classes.sidebar}>
                    {this.props.all.map((lang) => {
                        return <Item key={lang} clicked={() => this.props.changehandler(lang)} title={lang} active={this.props.active} />
                    })}
                </div>
                <Modal show={this.props.modal} closeBackdrop={this.props.closeBackdrop}>
                    <div>
                        <p>Movie Name: {this.props.modalData.name}</p>
                        <p>Language: {this.props.modalData.language}</p>
                        <p>IMDB Rating: {this.props.modalData.imdb}</p>
                    </div>
                </Modal>
                <Moviecards language={this.props.active} clicked={(key) => this.props.showModal(key)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        all: state.all,
        active: state.active,
        modal: state.modal,
        modalData: state.modalData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changehandler: (lang) => dispatch({ type: 'CHANGEACTIVE', language: lang }),
        showModal: (data) => dispatch({ type: 'MODALDATA', data: data }),
        closeBackdrop: () => dispatch({ type: 'CLOSEMODAL'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);