import React from 'react';

const Item = (props) => {

    return (
        <div className="item">
            <img src={props.img} className="itemImg"></img>
            <div className="itemName">{props.name}</div>
            <div className="itemDescription">{props.description}</div>
        </div>
    )
}

export default Item;