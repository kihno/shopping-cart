import React from 'react';
import trash from '../images/trash-black.svg';

const Cart = (props) => {
    const { cart, hide, handleCartClick, handleDelete } = props;

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
                    return <div className="cartItem" key={item.id} data-testid="cartItem">
                                <div data-testid="name">{item.name}</div>
                                <div>{item.price}</div>
                                <img src={trash} alt="Delte" className="trashIcon" onClick={() => handleDelete(item)} />
                            </div>
                })}
                <div id="cartTotal" data-testid="price">{totalPrice(cart)}</div>
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