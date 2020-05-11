import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';

const store = createStore(reducer, { prices: [{ symbol: 'USDCAD', price: 1.2 }], filters: { houruptrend: true, dayuptrend: true, topgainers: false } });

/* eslint-disable no-multi-str */
(async function setPrices() {
  const url = 'https://fcsapi.com/api-v2/forex/latest?symbol=GBB/EUR,EUR/JPY,\
USD/CAD,USD/JPY,EUR/USD,AUD/USD,AUD/JPY,\
NZD/USD,NZD/JPY, NZD/EUR,USD/GBP, GBP/JPY,\
GBP/AUD,GBP/NZD\
GBP/USD,GBP/CAD,CAD/JPY&period=1h&\
access_key=G6X1HS6qFGy2Xq9s6R5PYOPnY0pgn4VZ8hOLKjpRfi8nZKckKA';

  fetch(url)
    .then(response => response.json())
    .then(data => store.dispatch({ type: 'SET_PRICES', prices: data.response }));
}());

/* eslint-enable no-multi-str */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
