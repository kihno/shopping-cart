import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';


describe('Footer', () => {
    it('renders footer', () => {
        const { getByText } = render(<Footer />);

        expect(getByText('Created by')).toBeInTheDocument();
    });
});