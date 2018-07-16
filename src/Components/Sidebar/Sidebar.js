import React from 'react';
import classes from './Sidebar.css'; 
import Item from './Item/Item';

const sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Item title="English"/>
            <Item title="Hindi" />
            <Item title="Tamil" />
            <Item title="Telugu" />
            <Item title="Malayalam" />
        </div>
    );
}

export default sidebar;