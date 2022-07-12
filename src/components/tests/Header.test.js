import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

const cart = [];

describe('Header', () => {
    it ('renders header', () => {
        const { container } = render(<BrowserRouter><Header cart={cart} /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});