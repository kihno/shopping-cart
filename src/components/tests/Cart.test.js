import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../Cart';

const cart = [
    {name: 'foo', price: 15, id:0},
    {name: 'bar', price: 5, id:1},
    {name: 'baz', price: 3, id:2},
];

describe('Shopping cart', () => {
    it('renders cart', () => {
        const { container } = render(<Cart cart={cart} />);
        expect(container).toMatchSnapshot();
    });

    it ('renders products in cart', () => {
        render(<Cart cart={cart} />);

        expect(screen.queryAllByTestId('cartItem').length).toBe(3);
        expect(screen.queryAllByTestId('name')[0].textContent).toBe('foo');
    });

    it('renders total price', () => {
        render(<Cart cart={cart} />);

       expect(screen.queryByTestId('price').textContent).toBe('23'); 
    });
});