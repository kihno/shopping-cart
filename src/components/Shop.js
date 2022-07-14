import React from 'react';
import Product from './Product';

const Shop = (props) => {

    return (
        <div id="shop">
            <h1>Shop Page</h1>
            {props.items.map(item => {
                return <Product item={item} key={item.id} handleAdd={props.handleAdd} />
            })}
        </div>
    )
}

export default Shop;