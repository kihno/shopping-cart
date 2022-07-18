import { Link } from 'react-router-dom';
import React from 'react';
import CartButton from './CartButton';
import unsc from '../images/unsc-surplus.png';

const Header = (props) => {
    const { cart, handleCartClick, handleLogoClick, hideCart } = props;

    return(
        <div id="header">
            <div id="logo" onClick={handleLogoClick}>
                <img className="logo" src={unsc} alt="UNSC Surplus"></img>
            </div>
            <nav>
                <ul>
                    <Link to="/" onClick={hideCart}>
                        <li className="link">Home</li>
                    </Link>
                    <Link to="/shop" onClick={hideCart}>
                        <li className="link">Shop</li>
                    </Link>
                </ul>
            </nav>
            <CartButton cart={cart} handleCartClick={handleCartClick} />
        </div>
    )
}

export default Header;