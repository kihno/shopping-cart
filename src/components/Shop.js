import React from 'react';

const Shop = (props) => {

    return (
        <div id="shop">
            {props.items.map(() => {
                return <Item name={item.name} description={item.description} img={item.img} key={item.id}/>
            })}
        </div>
    )
}

export default Shop;