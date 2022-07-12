import { Link } from 'react-router-dom';
import React from 'react';
import CartButton from './CartButton';

const Header = (props) => {
    const { cart, handleCartClick, handleLogoClick } = props;

    return(
        <div id="header">
            <div id="logo" onClick={handleLogoClick}>LOGO</div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
            <CartButton cart={cart} handleCartClick={handleCartClick} />
        </div>
    )
}

export default Header;