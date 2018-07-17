import React from 'react';
import classes from './Item.css';

const item = (props) => {
    let comp = null;
    if(props.active === props.title) {
        comp = <p className={classes.itemactive} onClick={props.clicked}>{props.title}</p>
    }
    else {
        comp = <p className={classes.items} onClick={props.clicked}>{props.title}</p>
    }
    return (comp);
}

export default item;