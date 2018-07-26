import React from 'react';
import classes from './Moviecard.css';


const moviecard = (props) => {
    let card = null;
    const lang = props.language;
    switch (lang) {
        case 'English':
            card = <div className={classes.English} onClick={props.clicked}></div>
            break;
        
        case 'Hindi':
            card = <img src={props.url} className={classes.Hindi} onClick={props.clicked}/>
            break;

        case 'Bengali':
            card = <div className={classes.Bengali} onClick={props.clicked}></div>
            break;

        case 'Tamil':
            card = <div className={classes.Tamil} onClick={props.clicked}></div>
            break;

        case 'Telugu':
            card = <div className={classes.Telugu} onClick={props.clicked}></div>
            break;
        default:
            card = <div className={classes.Hindi} onClick={props.clicked}></div>
            break;
    }

    return (card);
}

export default moviecard;