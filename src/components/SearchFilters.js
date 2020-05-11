import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import symbols from '../helpers/symbols.js';

const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({

  sendFiltered: filter => dispatch({ type: 'FILTER_TAGS', filters: filter }),

});


const SearchFilters = props => {
  const { filters, sendFiltered } = props;
  let nextFilters = filters;
  let sValue = '';
  const setFilters = obj => {
    nextFilters = { ...nextFilters, ...obj };
    return nextFilters;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (sValue !== '') {
      sValue = sValue.toUpperCase();
      if (symbols.includes(sValue)) {
        const symbolFixed = sValue.toLowerCase().slice(0, 3) + sValue.toLowerCase().slice(-3);
        /* eslint-disable no-param-reassign */

        props.match.params.id = symbolFixed;
        /* eslint-enable no-param-reassign */

        return props.history.push(`/details/${symbolFixed}`);
      }
    }
    return sendFiltered(nextFilters);
  };

  const handleClick = e => {
    const signal = e.target.id;
    if (signal === 'houruptrend') {
      setFilters({ houruptrend: true });
    }
    if (signal === 'hourdowntrend') {
      setFilters({ houruptrend: false });
    }
    if (signal === 'dayuptrend') {
      setFilters({ dayuptrend: true });
    }
    if (signal === 'daydowntrend') {
      setFilters({ dayuptrend: false });
    }
  };

  const handleInput = e => {
    sValue = e.target.value;
  };

  return (
    <div className="input-container flex demo">

      <form onSubmit={handleSubmit} className="search">


        <div className="search-form-control form-group">

          <input className="form-control string required" type="text" onChange={handleInput} placeholder="Search by symbol name, like: USD/CAD" />
          <input type="submit" className="btn btn-flat" value="SEARCH" />
        </div>

        <div className="div-trends">
          <div id="hourtrend">
            <h2>HOURLY</h2>

            <label htmlFor="hourtrend">
              {' '}
              uptrend
              <input type="radio" value="Uptrend" name="hourtrend" id="houruptrend" onClick={handleClick} />
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

      </form>
    </div>
  );
};

SearchFilters.propTypes = {

  filters: PropTypes.objectOf(PropTypes.object).isRequired,
  sendFiltered: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFilters));
