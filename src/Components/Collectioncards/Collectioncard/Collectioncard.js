import React, { Component } from 'react';
import claases from './Collectioncard.css';

const collectioncard = (props) => {
    return (
        <div className={claases.album}>
            <span className={claases.remove} onClick={props.clicked}>REMOVE</span>
            <img src={props.url} className={claases.artwork}/>
            <div>
                <h2>{props.name}</h2>
                <p className={claases.light}>IMDB Rating:{props.imdb}</p>
                <p className={claases.light}>Language:{props.language}</p>
            </div>
        </div>
    );
}

export default collectioncard;