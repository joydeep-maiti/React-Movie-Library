import React from 'react';
import classes from './Moviecard.css';


const moviecard = (props) => {
    return (
        <img src={props.url} className={classes.card} onClick={props.clicked} />
    );
}

export default moviecard;