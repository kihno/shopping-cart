import React from 'react';
import AddCartButton from './AddCartButton';

const Product = (props) => {
    const { item, handleAdd } = props;

    return (
        <div className="item" key={item.id}>
            <img src={item.img} className="itemImg" alt={item.name}></img>
            <div className="itemName" data-testid="name">{item.name}</div>
            <div className="itemDescription" data-testid="description">{item.description}</div>
            <div className="itemPriceContainer">
                <div className="price itemPrice" data-testid="price">{item.price.toLocaleString('en', {useGrouping:true})}</div>
                <AddCartButton handleAdd={() => handleAdd(item)} />
            </div>
            
        </div>
    )
}

export default Product;