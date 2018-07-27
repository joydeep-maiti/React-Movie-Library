import React, { Component } from 'react';
import claases from './Collectioncard.css';

const collectioncard = (props) => {
    return (
        <div className={claases.album}>
            <img src={props.url} className={claases.artwork}/>
            <div>
                <h2>{props.name}</h2>
                <p>IMDB Rating:{props.imdb}</p>
                <p>Language:{props.language}</p>
            </div>
        </div>
    );
}

export default collectioncard;