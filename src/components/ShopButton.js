import React from 'react';

const ShopButton = (props) => {
    const { handleShopClick } = props;

    return(
        <button type="button" id="shopButton" onClick={handleShopClick}>Shop Now</button>
    )
}

export default ShopButton;