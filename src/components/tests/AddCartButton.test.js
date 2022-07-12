import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCartButton from '../AddCartButton';
import userEvent from '@testing-library/user-event';

describe('Add to cart button', () => {
    it ('renders button', () => {
        const { container } = render(<AddCartButton />);
        expect(container).toMatchSnapshot();
    });
});