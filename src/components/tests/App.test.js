import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockedUsedNavigate,
}));

describe('App homepage', () => {
    it('successful api call', async () => {
        render(<App />);

        const button = getByText('Shop Now');
        expect(button).toBeInTheDocument();

        userEvent.click(button);

        const product = await waitForElement(() => getByText('Scorpion'));
        expect(product).toBeInTheDocument();
    });

    it('generates price' , () => {

    });

});