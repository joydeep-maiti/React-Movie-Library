import React from 'react';
import classes from './Moviecards.css';
import Moviecard from '../../Components/Moviecard/Moviecard';


const moviecards = (props) => {
    console.log('router',props.arr); 
    let movieslist = props.arr; 
        return(
            <div className={classes.moviecards} >
                {movieslist.map(key => {
                    return <Moviecard 
                                key = {key.name} 
                                language = {key.language}
                                url = {key.url} 
                                clicked = {()=>props.clicked(key)}/>
                    })}
            </div>
        );
}

export default moviecards;