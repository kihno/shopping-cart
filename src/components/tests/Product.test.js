import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../Product';
import AddCartButton from '../AddCartButton';

describe('Item component', () => {
    it('renders item name', () => {
        const item = {name: "Item Name"};
        const { getByTestId } = render(<Product item={item} />);

        expect(getByTestId('name').textContent).toMatch(/item name/i);
    });

    it('renders item description', () => {
        const item = {description: "Item Description"};
        const { getByTestId } = render(<Product item={item} />);

        expect(getByTestId('description').textContent).toMatch(/item description/i);
    });

    it('renders item image', () => {
        const item = {img: "the_url", name: "Item Name"};
        const { getByAltText } = render(<Product item={item} />);
        const image = getByAltText(item.name);

        expect(image.src).toMatch(/the_url/i);
    });

    it('renders add to cart button', () => {
        const item = {key: 0}
        const {getByRole } = render(<Product item={item} />);

        expect(getByRole('button').textContent).toMatch(/add to cart/i);
    })
});