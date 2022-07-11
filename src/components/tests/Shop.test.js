import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../Shop';

jest.mock('../Product', () => (props) => {
    return (<div data-testid="item" key={props.item.key}>{props.item.name}</div>);
});

const items = [
    {name: 'foo', key: 0},
    {name: 'bar', key: 1},
    {name: 'baz', key: 2},
];

describe('Shop page', () => {
    it ('renders shop page', () => {
        const { container } = render(<Shop items={items} />);
        expect(container).toMatchSnapshot();
    });

    it ('renders product listings', () => {
        render(<Shop items={items} />);

        expect(screen.queryAllByTestId('item').length).toBe(3);
        expect(screen.queryAllByTestId('item')[0].textContent).toBe('foo');
    });
})