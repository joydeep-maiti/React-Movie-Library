import React  from 'react';
import classes from './Collectioncards.css';
import Collectioncard from './Collectioncard/Collectioncard';

const collectioncards = (props) => {
    let collectionlist = props.arr;
    return (
        <div className={classes.alb}>
            {collectionlist.map(key => {
                return <Collectioncard 
                            key={key.id} 
                            name={key.name} 
                            language={key.language} 
                            imdb={key.imdb} 
                            url={key.url}
                            clicked={() => props.clicked(key)} />
            })}
        </div>
    );
}

export default collectioncards;