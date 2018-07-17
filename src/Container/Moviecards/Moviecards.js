import React from 'react';
import classes from './Moviecards.css';
import Moviecard from '../../Components/Moviecard/Moviecard';

const moviecards = (props) => {  
        return(
            <div className={classes.moviecards} >
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
            </div>
        );
}

export default moviecards;