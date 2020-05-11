import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import appstyles from './styles/appstyles.module.css';

const CardItem = props => {
  const [stats, setStats] = useState({ summary: 'Analizyng...' });
  /* eslint-disable react/destructuring-assignment */
  const { id } = props.match.params;
  /* eslint-enable react/destructuring-assignment */
  const symbol = `${id.toUpperCase().slice(0, 3)}/${id.toUpperCase().slice(-3)}`;

  const normalize = data => {
    const newObj = {};
    const obj = Object.entries(data);
    for (const [key, value] of obj) {
      newObj[key] = value.s || value;
    }

    return newObj;
  };

  useEffect(() => {
    (async function getIndicators() {
      const url = `https://fcsapi.com/api-v2/forex/indicators?symbol=${symbol}&period=1h&access_key=G6X1HS6qFGy2Xq9s6R5PYOPnY0pgn4VZ8hOLKjpRfi8nZKckKA`;
      const response = await fetch(url);
      const data = await response.json();
      const indicators = await data.response.indicators;
      const result = normalize(indicators);
      setStats(result);
    }());
  }, []);


  return (
    <div className={appstyles.card_indicators}>

      <h1>
        {' '}
        {symbol.toUpperCase()}
      </h1>

      <h2 style={{ backgroundColor: 'yellow' }}>
        {' '}
        {stats.summary}
      </h2>
      <div className={appstyles.card_indicators_details}>
        <span>
          <h3>RSI:</h3>
          {' '}
          {stats.RSI14}
        </span>
        <span>
          <h3>ATR:</h3>
          {' '}
          {stats.ATR14}
        </span>
        <span>
          <h3>MACD:</h3>
          {' '}
          {stats.MACD12_26}
        </span>
        <span>
          <h3>STOCH:</h3>
          {' '}
          {stats.STOCH9_6}
        </span>
        <span>
          <h3>WILLIAMS:</h3>
          {' '}
          {stats.williamsR}
        </span>
      </div>
      <button type="button" className={appstyles.goback} onClick={() => props.history.push('/')}>GO BACK</button>

    </div>

  );
};

CardItem.propTypes = {

  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({ length: PropTypes.number.isRequired }),
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default CardItem;
