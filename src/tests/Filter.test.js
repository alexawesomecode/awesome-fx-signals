import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../components/Filter';

test("renders right structure, HOURLY AND DALY ", () => {

    render(<Filter handleClick={() => jest.fn()}> </Filter>)
    expect(screen.queryByText('HOURLY')).not.toBeNull()

    expect(screen.queryByText('DAILY')).not.toBeNull()


})

test("clicking radio button fires handle function", () => {

    const Click = () => jest.fn();
    render(<Filter handleClick={Click}> </Filter>)
    fireEvent.click(screen.getByTestId('houruptrend'))
    expect(Click).toHaveBeenCalled;

})


test("clicking radio button fires handle function", () => {

    let labelElements;
    const Click = () => jest.fn();
    render(<Filter handleClick={Click}> </Filter>)

    labelElements = screen.getAllByText('downtrend')
    expect(labelElements.length).toBe(2);

    labelElements = screen.getAllByText('uptrend')
    expect(labelElements.length).toBe(2);

})