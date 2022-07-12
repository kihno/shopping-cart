import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    const totalPrice = (cart) => {
        let price = 0;

        cart.map(item => {
            price += item.price;
        });

        return price;
    }

    return(
        <div id="cart">
            {cart.map(item => {
                return <div className="cartItem" key={item.id} data-testId="cartItem">
                            <div data-testId="name">{item.name}</div>
                            <div>{item.price}</div>
                        </div>
            })}
            <div id="cartTotal" data-testId="price">{totalPrice(cart)}</div>
        </div>
    )
}

export default Cart;