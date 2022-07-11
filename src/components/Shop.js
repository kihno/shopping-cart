import React from 'react';
import Product from './Product';

const Shop = (props) => {

    return (
        <div id="shop">
            {props.items.map(item => {
                return <Product item={item} />
            })}
        </div>
    )
}

export default Shop;