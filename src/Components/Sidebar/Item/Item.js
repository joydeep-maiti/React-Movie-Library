import React from 'react';
import classes from './Item.css';

const item = (props) => {
    return (
            <p className={classes.items} onClick={props.clicked}>{props.title}</p>
    );
}

export default item;