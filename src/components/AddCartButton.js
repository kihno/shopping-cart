import React from 'react';

const AddCartButton = (props) => {
    const { handleAdd } = props;

    return (
        <button type="button" className="addButton" onClick={handleAdd}>Add to Cart</button>
    )
}

export default AddCartButton;