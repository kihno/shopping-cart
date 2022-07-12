import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home page', () => {
    it('renders home page', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });

    it('renders shop button', () => {
        const {getByRole } = render(<Home />);

        expect(getByRole('button').textContent).toMatch(/shop now/i);
    });
});