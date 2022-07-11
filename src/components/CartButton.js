import React from 'react';

const CartButton = (props) => {
    const { cart, handleCartClick } = props;

    return(
        <div id="cartButton" onClick={handleCartClick}>CART</div>
    )
}

export default CartButton;