import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopButton from '../ShopButton';

describe('Add to cart button', () => {
    it ('renders button', () => {
        const { container } = render(<ShopButton />);
        expect(container).toMatchSnapshot();
    });
});