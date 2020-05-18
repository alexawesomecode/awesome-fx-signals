import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CardItem from './CardItem.mock';



test("render right list of indicators", () => {

    let labelElements;
    const Click = () => jest.fn();
    const match = { params: {id: 'eurusd', path: 'details'}}
    
    render(<CardItem handleClick={Click} match={match}> </CardItem>)


    labelElements = screen.getAllByText('MACD:')
    expect(labelElements.length).toBe(1);


    labelElements = screen.getAllByText('RSI:')
    expect(labelElements.length).toBe(1);

    labelElements = screen.getAllByText('STOCH:')
    expect(labelElements.length).toBe(1);

})

test("Start rendering from local state", () => {

    
    const Click = () => jest.fn();
    const match = { params: {id: 'eurusd', path: 'details'}}
    
    const { getByText } = render(<CardItem handleClick={Click} match={match}> </CardItem>)
    
    expect(getByText('Analyzing...')).toBeInTheDocument()


})


  
test("click on button works", () => {


    const Click = () => jest.fn();
    const match = { params: {id: 'eurusd', path: 'details'}}

    const { getByText } = render(<CardItem handleClick={Click} match={match}> </CardItem>)

    const node = getByText("GO BACK");
    fireEvent.click(node);  
  });
  
  