import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchFilters from './SearchFilters.mock'


test('renders correctly', () => {


  const container = render(<SearchFilters />)
  expect(container.firstChild).toMatchSnapshot()
 })

test('asserts form rendering', () => {
    const container = render(<SearchFilters />)
  expect(document.querySelectorAll('form').length).toEqual(1)
 })

 
