import '@testing-library/jest-dom'
import React from 'react';
import symbols from '../helpers/symbols.js'
import {render, fireEvent, screen} from '@testing-library/react'
import {fixedRoute, setFilters} from './utils.js'

test("test value pass to fixedRoute is NOT included in list of symbols", () => {

    
    expect(fixedRoute('usd/clp')).toBe(undefined)
    
    expect(fixedRoute('pen/clp')).toBe(undefined)

}) 

test("expect when entering valid symbol return of valid route", () => {


    let validSymbol = "USD/CAD"
    expect(fixedRoute(validSymbol)).toBe('/details/usdcad')

    validSymbol = "EUR/USD"

   expect(fixedRoute(validSymbol)).toBe('/details/eurusd')

})