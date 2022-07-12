import React from 'react';
import shoppingBag from '../images/shoppingBag.svg';

const CartButton = (props) => {
    const { cart, handleCartClick } = props;

    return(
        <div id="cartButton" onClick={handleCartClick}>
            <img id="shoppingCart" src={shoppingBag} alt="Shopping Cart" />
            <span id="cartTotal" data-testid="cartTotal">
                {(cart.length === 0) ? '' : cart.length}
            </span>
        </div>
    )
}

export default CartButton;