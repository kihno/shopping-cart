import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCartButton from '../components/AddCartButton';

describe('Add to cart button', () => {
    it ('renders button', () => {
        const { container } = render(<AddCartButton />);
        expect(container).toMatchSnapshot();
    });
});