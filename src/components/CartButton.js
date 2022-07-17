import React from 'react';
import shoppingBag from '../images/shoppingBag.svg';

const CartButton = (props) => {
    const { cart, handleCartClick } = props;

    let cartNumber = 0;

    cart.map(item => {
        cartNumber += item.quantity;
        return parseInt(cartNumber, 1);
    });

    return(
        <div id="cartButton" onClick={handleCartClick}>
            <img id="shoppingCart" src={shoppingBag} alt="Shopping Cart" />
            <span id="cartNumber" data-testid="cartTotal" className={cart.length ? null : "hide"}>
                {(cart.length === 0) ? '' : cartNumber}
            </span>
        </div>
    )
}

export default CartButton;