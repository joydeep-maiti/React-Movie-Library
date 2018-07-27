import React  from 'react';
import classes from './Collectioncards.css';
import Collectioncard from './Collectioncard/Collectioncard';

const collectioncards = (props) => {
    let collectionlist = props.arr;
    return (
        <div className={classes.alb}>
            {collectionlist.map(key => {
                return <Collectioncard key={key.name} name={key.name} language={key.language} imdb={key.imdb} url={key.url} />
            })}
        </div>
    );
}

export default collectioncards;