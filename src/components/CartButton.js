import React, { useEffect, useState } from 'react';
import shoppingBag from '../images/shoppingBag.svg';

const CartButton = (props) => {
    const { cart, handleCartClick } = props;

    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        let quantity = 0;

        cart.map(item => {
            quantity += item.quantity;
            setCartNumber(quantity);
        });
    }, [cart]);

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