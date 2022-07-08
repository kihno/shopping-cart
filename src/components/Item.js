import React from 'react';

const Item = (props) => {

    return (
        <div className="item">
            <img src={props.img} className="itemImg" alt={props.name}></img>
            <div className="itemName" data-testId="name">{props.name}</div>
            <div className="itemDescription" data-testId="description">{props.description}</div>
        </div>
    )
}

export default Item;