import React from 'react';
import Product from './Product';

const Shop = (props) => {

    return (
        <div id="shop">
            <div id="productGrid">
                {props.items.map(item => {
                    return <Product item={item} key={item.id} handleAdd={props.handleAdd} />
                })}
            </div>
        </div>
    )
}

export default Shop;