import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartButton from '../CartButton';

const cart = ['item1', 'item2', 'item3'];
const emptyCart = [];

describe('Cart Button', () => {
    it('renders cart icon', () => {
        render(<CartButton cart={cart} />);
        const icon = screen.getByRole('img');

        expect(icon).toHaveAttribute('src', 'shoppingBag.svg');
        expect(icon).toHaveAttribute('alt', 'Shopping Cart');
    });

    it('renders number of items in cart', () => {
        render(<CartButton cart={cart} />);
        const number = screen.getByTestId('cartTotal');

        expect(number.textContent).toMatch('3');
    });

    it('just icon when cart is empty', () => {
        render(<CartButton cart={emptyCart} />);
        const number = screen.getByTestId('cartTotal');

        expect(number.textContent).toMatch('');
    });
})