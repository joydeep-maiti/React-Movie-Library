import React from 'react';
import classes from './Sidebar.css'; 
import Item from './Item/Item';

const sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Item title="English" clicked={(event) => props.onClicked('English')}/>
            <Item title="Hindi"  clicked={props.onClicked}/>
            <Item title="Tamil"  clicked={props.onClicked}/>
            <Item title="Telugu" clicked={props.onClicked} />
            <Item title="Malayalam"  clicked={props.onClicked}/>
        </div> 
    );
}

export default sidebar;