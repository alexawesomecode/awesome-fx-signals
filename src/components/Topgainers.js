import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import top from './styles/topgainers.module.css';

const mapStateToProps = state => ({ prices: state.prices });

const Topgainers = props => {
  const { prices } = props;
  let sorted = prices.slice();

  sorted.sort((a, b) => parseFloat(b.change) - parseFloat(a.change));
  sorted = _.take(sorted, 5);


  return (
    <div className={top.container_top}>
      {sorted.map(elem => (
        <div className={top.container_elem} key={elem.symbol}>
          <h2>
            {' '}
            {elem.symbol}
            {' '}
            Daily Change:
            {' '}
          </h2>
          {' '}
          <h2>
            {' '}
            {elem.change}
          </h2>
          {' '}
        </div>
      ))}
    </div>
  );
};

Topgainers.propTypes = {

  prices: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default connect(mapStateToProps, null)(Topgainers);
