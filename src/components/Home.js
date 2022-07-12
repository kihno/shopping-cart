import React from 'react';
import ShopButton from './ShopButton';

const Home = (props) => {
    const { handleShopClick } = props;

    return(
        <div id="home">
            <h1>Home Page</h1>
            <ShopButton handleShopClick={handleShopClick} />
        </div>
    )
}

export default Home;