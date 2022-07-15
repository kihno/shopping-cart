import React from 'react';
import ShopButton from './ShopButton';

const Home = (props) => {
    const { handleShopClick } = props;

    return(
        <div id="home">
            <h1>UNSC Surplus</h1>
            <h2>Travel the ring in style</h2>
            <ShopButton handleShopClick={handleShopClick} />
        </div>
    )
}

export default Home;