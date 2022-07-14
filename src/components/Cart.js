import React from 'react';

const Cart = (props) => {
    const { cart, hide, handleCartClick } = props;

    const totalPrice = (cart) => {
        let price = 0;

        cart.map(item => {
            price += item.price;
        });

        return price;
    }

    if (cart.length > 0) {
        return (
            <div id="cart" className={hide ? "hide" : null}>
            {cart.map(item => {
                    return <div className="cartItem" key={item.id} data-testId="cartItem">
                                <div data-testId="name">{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                })}
                <div id="cartTotal" data-testId="price">{totalPrice(cart)}</div>
            <button onClick={handleCartClick} >Continue Shopping</button>
            <button>Checkout</button>
        </div>
        )
    } else {
        return (
            <div id="cart" className={hide ? "hide" : null}>
            <p>Your Cart is Empty!</p>
            <button onClick={handleCartClick} >Continue Shopping</button>
            <button>Checkout</button>
        </div>
        )
    }
}

export default Cart;