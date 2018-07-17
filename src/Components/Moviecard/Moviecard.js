import React from 'react';
import classes from './Moviecard.css';


const moviecard = (props) => {
    let card = null;
    const lang = props.language;
    switch (lang) {
        case 'English':
            card = <div className={classes.English}></div>
            break;
        
        case 'Hindi':
            card = <div className={classes.Hindi}></div>
            break;

        case 'Bengali':
            card = <div className={classes.Bengali}></div>
            break;

        case 'Tamil':
            card = <div className={classes.Tamil}></div>
            break;

        case 'Telugu':
            card = <div className={classes.Telugu}></div>
            break;
        default:
            card = <div className={classes.Hindi}></div>
            break;
    }

    return (card);
}

export default moviecard;