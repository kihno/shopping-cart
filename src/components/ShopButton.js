import React from 'react';

const ShopButton = (props) => {
    const { handleShopClick } = props;

    return(
        <div id="shopBtnContainer">
            <button type="button" id="shopButton" onClick={handleShopClick}>Shop Now</button>
        </div>
    )
}

export default ShopButton;