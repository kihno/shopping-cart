import React from 'react';
import trash from '../images/trash-black.svg';

const Cart = (props) => {
    const { cart, hide, handleCartClick, handleInput, handleDelete } = props;

    const totalPrice = (cart) => {
        let price = 0;

        cart.map(item => {
          const itemPrice = item.price * item.quantity;
          price += itemPrice;
        });

        return price;
    }

    if (cart.length > 0) {
        return (
            <div id="cart" className={hide ? "hide" : null}>
            {cart.map(item => {
                    return <div className="cartItem" key={item.id} data-testid="cartItem">
                                <div className="cartName" data-testid="name">{item.name}</div>
                                <div className="priceContainer">
                                    <div className="price">{item.price * item.quantity}</div>
                                    <input type="number" className="quantity" name={item.name} value={item.quantity} onChange={handleInput} />
                                    <img src={trash} alt="Delete" className="trashIcon" onClick={() => handleDelete(item)} />
                                </div>
                                
                            </div>
                })}
                <div id="cartTotal" data-testid="price">Cart Total: $ {totalPrice(cart)}</div>
            <div id="cartButtons">
                <button onClick={handleCartClick} >Continue Shopping</button>
                <button>Checkout</button>
            </div>
            
        </div>
        )
    } else {
        return (
            <div id="cart" className={hide ? "hide" : null}>
            <p>Your Cart is Empty!</p>
            <div id="cartButtons">
                <button onClick={handleCartClick} >Continue Shopping</button>
            </div>
        </div>
        )
    }
}

export default Cart;