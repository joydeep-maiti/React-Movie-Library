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
                case "English": url = '/movies-eng.json';
                                break;
                case "Hindi": url = '/movies.json';
                                break;
                case "Bengali": url = '/movies-beng.json';
                                break;
                case "Tamil": url = '/movies-tamil.json';
                                break;
                case "Telugu": url = '/movies-telugu.json';
                                break;
                            
            }
            axios.get(url)
                .then(res => {
                    movieslist = Object.values(res.data);
                    this.props.updateMovielist(movieslist);
                })
                .catch(err => console.log('err', err));
            
            this.props.changehandler(this.props.active.current);
        }
        
    }
    componentDidMount() {
    //     let movieslist = [
    //     { name: 'Spyder', language: 'Telugu', imdb: 6.5, url: "http://igmedia.blob.core.windows.net/igmedia/telugu/gallery/movies/spyder_2017/main.jpg" },
    //     { name: 'Lie', language: 'Telugu', imdb: 5.5, url: "http://igmedia.blob.core.windows.net/igmedia/telugu/gallery/movies/lie_17/main.jpg" },
    //     { name: 'Dhruva', language: 'Telugu', imdb: 7.2, url: "http://igmedia.blob.core.windows.net/igmedia/telugu/gallery/movies/dhruva_16/main.jpg" },
    //     { name: 'Bruce Lee', language: 'Telugu', imdb: 6.1, url: "http://igmedia.blob.core.windows.net/igmedia/telugu/gallery/movies/ramcharannewmovie/main.jpg" },
    //     { name: 'Neeram', language: 'Telugu', imdb: 6.7, url: "https://moviemavengaldotcom.files.wordpress.com/2016/07/neram-telugu-remake.jpg" },
    //     { name: 'sarrainodu', language: 'Telugu', imdb: 6.5, url: "http://igmedia.blob.core.windows.net/igmedia/telugu/gallery/movies/sarainodu_16/sarimain.jpg" }
    // ];
        
    //     axios.post('/movies-telugu.json', movieslist[0])
    //             .then(res => console.log('res',res))
    //             .catch(err => console.log('err', err));

        let movieslist = [];
        if(this.props.active.current === 'Hindi') {
            axios.get('/movies.json')
                .then(res => {
                    movieslist = Object.values(res.data);
                    this.props.updateMovielist(movieslist);
                })
                .catch(err => console.log('err', err));
            this.props.changehandler(this.props.active.current);
        }
        
    }
    addToCollection = () => {
        console.log('in here');
        axios.post('/collection.json',this.props.modalData)
            .then(res => {
                console.log('post',res);
                this.props.closeBackdrop();
            })
            .catch(err => console.log('err', err));
    }
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
                    <div className={classes.modal}>
                        <img src={this.props.modalData.url} alt="img" className={classes.img} />
                        <p>Movie Name: {this.props.modalData.name}</p>
                        <p>Language: {this.props.modalData.language}</p>
                        <p>IMDB Rating: {this.props.modalData.imdb}</p>
                        <p className={classes.btn} onClick={this.addToCollection}> ADD TO COLLECTION</p>
                    </div>
                </Modal>
                <Moviecards 
                    arr={this.props.movieslist} 
                    language={this.props.active} 
                    clicked={(key) => this.props.showModal(key)} />
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