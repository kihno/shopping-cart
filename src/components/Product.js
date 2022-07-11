import React from 'react';
import AddCartButton from './AddCartButton';

const Product = (props) => {
    const { item, handleAdd } = props;

    return (
        <div className="item" key={item.key}>
            <img src={item.img} className="itemImg" alt={item.name}></img>
            <div className="itemName" data-testId="name">{item.name}</div>
            <div className="itemDescription" data-testId="description">{item.description}</div>
            <AddCartButton handleAdd={handleAdd} />
        </div>
    )
}

export default Product;