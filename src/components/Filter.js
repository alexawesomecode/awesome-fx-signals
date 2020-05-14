import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const { handleClick } = props;

  return (

    <div className="div-trends">
      <div id="hourtrend">
        <h2>HOURLY</h2>

        <label htmlFor="hourtrend">
          {' '}
          uptrend
          <input type="radio" value="Uptrend" name="hourtrend" id="houruptrend" data-testid="houruptrend" onClick={handleClick} />
        </label>

        <label htmlFor="hourtrend">
          {' '}
          downtrend
          <input type="radio" value="Downtrend" name="hourtrend" id="hourdowntrend" onClick={handleClick} />
        </label>
      </div>

      <div id="daytrend">
        <h2>DAILY</h2>

        <label htmlFor="daytrend">
          {' '}
          uptrend
          <input type="radio" value="Uptrend" name="daytrend" id="dayuptrend" onClick={handleClick} />
        </label>

        <label htmlFor="daytrend">
          {' '}
          downtrend
          <input type="radio" value="Downtrend" name="daytrend" id="daydowntrend" onClick={handleClick} />
        </label>

      </div>

    </div>
  );
};

Filter.propTypes = {

  handleClick: PropTypes.func.isRequired,
};

export default Filter;
