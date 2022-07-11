import React from 'react';

const Cart = (props) => {

    return(
        <div id="cart">
            {items.map(item => {
                <div className="cartItem">
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                </div>
            })}
            <div id="cartTotal">{cart.total}</div>
        </div>
    )
}

export default Cart;