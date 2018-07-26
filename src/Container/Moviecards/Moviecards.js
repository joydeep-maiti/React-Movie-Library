import React from 'react';
import classes from './Moviecards.css';
import Moviecard from '../../Components/Moviecard/Moviecard';

const moviecards = (props) => {
    console.log('router',props);  
    let movieslist = [
        { name: 'Sanju', language: 'Hindi', imdb: 8.5, url:"http://www.bollywoodlife.com/wp-content/uploads/2018/07/sanju-poster-2-1.jpg" },
        { name: 'Gangs of Wasseypur', language: 'Hindi', imdb: 8.5, url:"https://i.pinimg.com/originals/46/eb/c1/46ebc11dedf6dc4db55496edd0171200.jpg" },
        { name: 'Gullab Gang', language: 'Hindi', imdb: 8.5, url: "https://i.pinimg.com/originals/5e/bb/bf/5ebbbfae462932ccedb84a5fa51a8629.jpg" },
        { name: 'Two States', language: 'Hindi', imdb: 8.5, url: "https://i.pinimg.com/originals/02/5b/51/025b51c8e41a3616c92392698ec600b0.jpg"},
        { name: 'Udta Punjab', language: 'Hindi', imdb: 8.5, url: "https://3.bp.blogspot.com/-RrDLxDYgjAw/VxMsFlatDWI/AAAAAAAAHsc/WVHntaVzpgMcQaOtM10HiQtDWrIJx0tPwCLcB/s1600/udta-punjab-new-poster-tailer-star-cast-upcoming-mtwiki-2016.jpg"},
        { name: 'Devdas', language: 'Hindi', imdb: 8.5, url: "https://i.pinimg.com/736x/31/44/f6/3144f68a94afc481ede562ad39e5ef2f--red-chilli-sanjay-leela-bhansali.jpg"},]

        return(
            
            <div className={classes.moviecards} >
                {movieslist.map(key => {
                    return <Moviecard 
                                key = {key.name} 
                                language = {key.language}
                                url = {key.url} 
                                clicked = {()=>props.clicked(key)}/>
                    })}
                {/* <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} />
                <Moviecard language={props.language} /> */}
            </div>
        );
}

export default moviecards;