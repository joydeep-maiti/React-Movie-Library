import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import Collectioncards from '../../Components/Collectioncards/Collectioncards';
import dbRef from '../../firebase/firebase';
import classes from './Collection.css';


class Collection extends Component {
    componentDidMount() {
        let collectionlist = [];
            axios.get('/collection.json')
                .then(res => {
                    collectionlist = [];
                    for (let id in res.data) {
                        collectionlist.push({
                            ...res.data[id],
                            id:id
                        })
                    }
                    this.props.updateCollectionlist(collectionlist);
                })
                .catch(err => console.log('err', err));
    }
    removeCollection = (key) => {
        console.log('remove', key.id);
        dbRef.ref('collection/'+ key.id).remove()
            .then(res => {
                this.componentDidMount();
            })
            .catch(err => console.log('err', err));
    }
    render() {
        return(
            <div className={classes.collection}>
                <Collectioncards arr={this.props.collectionlist} clicked={(key) => this.removeCollection(key)} />
            </div>  
        );
    }
}
const mapStateToProps = (state) => {
    return {
        collectionlist: [...state.collectionlist]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollectionlist: (data) => dispatch({ type: 'COLLECTIONLISTUPDATE', collectionlist: data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);