import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../components/Item';

describe('Item component', () => {
    it('renders item name', () => {
        const name = "Item Name";
        const { getByTestId } = render(<Item name={name} />);

        expect(getByTestId('name').textContent).toMatch(/item name/i);
    });

    it('renders item description', () => {
        const description = "Item Description";
        const { getByTestId } = render(<Item description={description} />);

        expect(getByTestId('description').textContent).toMatch(/item description/i);
    });

    it('renders item image', () => {
        const url = 'the_url';
        const name = "Item Name";
        const { getByAltText } = render(<Item name={name} img={url}/>);
        const image = getByAltText(name);

        expect(image.src).toMatch(/the_url/i);
    });
});