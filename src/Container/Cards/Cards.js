import React, { Component } from 'react';
import Moviecards from '../Moviecards/Moviecards';
import Item from '../../Components/Item/Item';
import classes from './Cards.css';
import { connect } from 'react-redux';
import Modal from '../../Components/Modal/Modal';
import axios from '../../axios';

class Cards extends Component {
    componentDidUpdate() {
        console.log('props',this.props.active);
        let url = null;
        let movieslist = [];
        if(this.props.active.current !== this.props.active.last) {
            switch (this.props.active.current) {
                case "English": url = '/movies.json';
                                break;
                case "Hindi": url = '/movies.json';
                                break;
                case "Bengali": url = '/movies.json';
                                break;
                case "Tamil": url = '/movies.json';
                                break;
                case "Telugu": url = '/movies.json';
                                break;
                            
            }
                axios.get(url)
                    .then(res => {
                        movieslist = Object.values(res.data);
                        this.props.updateMovielist(movieslist);
                        console.log('Bengali');
                    })
                    .catch(err => console.log('err', err));
        }
        
    }
    // componentDidMount() {
    //     let movieslist = [];
    //     if(this.props.active.current === 'Hindi') {
    //         axios.get('/movies.json')
    //             .then(res => {
    //                 movieslist = Object.values(res.data);
    //                 this.props.updateMovielist(movieslist);
    //             })
    //             .catch(err => console.log('err', err));
    //     }
        
    // }
    render() {  
        if(this.props.active === 'Hindi') {
            console.log('hindi');
        }
        return(
            <div className={classes.main}>
                <div className={classes.sidebar}>
                    {this.props.all.map((lang) => {
                        return <Item 
                                    key={lang} 
                                    clicked={() => this.props.changehandler(lang)} 
                                    title={lang} 
                                    active={this.props.active.current} />
                    })}
                </div>
                <Modal show={this.props.modal} closeBackdrop={this.props.closeBackdrop}>
                    <div>
                        <p>Movie Name: {this.props.modalData.name}</p>
                        <p>Language: {this.props.modalData.language}</p>
                        <p>IMDB Rating: {this.props.modalData.imdb}</p>
                    </div>
                </Modal>
                <Moviecards arr={this.props.movieslist} language={this.props.active} clicked={(key) => this.props.showModal(key)} />
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
        movieslist: [...state.movieslist]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changehandler: (lang) => dispatch({ type: 'CHANGEACTIVE', language: lang }),
        showModal: (data) => dispatch({ type: 'MODALDATA', data: data }),
        closeBackdrop: () => dispatch({ type: 'CLOSEMODAL'}),
        updateMovielist: (data) => dispatch({ type: 'MOVIELISTUPDATE', movieslist: data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);