import React from 'react';

const ShopButton = (props) => {
    const { handleShopClick } = props;

    return(
        <button type="button" id="shopButton" onClick={handleShopClick}></button>
    )
}

export default ShopButton;