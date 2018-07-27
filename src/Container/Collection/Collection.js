import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import Collectioncards from '../../Components/Collectioncards/Collectioncards';


class Collection extends Component {
    componentDidMount() {
        let collectionlist = [];

            axios.get('/collection.json')
                .then(res => {
                    collectionlist = Object.values(res.data);
                    this.props.updateCollectionlist(collectionlist);
                })
                .catch(err => console.log('err', err));
    }
    render() {
        return(
                <Collectioncards arr={this.props.collectionlist}/>
           
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