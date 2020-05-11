import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ indicators }) => {
  const {
    change, chg_per, price, symbol,
  } = indicators;
  const fixedRoute = `/details/${symbol.replace('/', '').toLowerCase()}`;

  return (
    <Link to={fixedRoute}>
      <div className="card-item">
        <h1>{symbol}</h1>
        <span className="span-price">{price}</span>
        <span>
          1H Change:
          {change}
        </span>
        <span>
          1D Change:
          {chg_per}
        </span>
      </div>
    </Link>
  );
};

Card.propTypes = {

  indicators: PropTypes.objectOf(PropTypes.object).isRequired,

};

export default Card;
