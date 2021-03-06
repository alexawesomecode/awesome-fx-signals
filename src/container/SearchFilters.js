import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import symbols from '../helpers/symbols.js';
import Filter from '../components/Filter';

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

        <Filter handleClick={handleClick} />

      </form>
    </div>
  );
};

SearchFilters.propTypes = {


  filters: PropTypes.shape({ houruptrend: PropTypes.bool.isRequired }).isRequired,
  sendFiltered: PropTypes.func.isRequired,
  match: PropTypes.shape(
    {
      params: PropTypes.object.isRequired,

    },
  ).isRequired,
  history: PropTypes.shape(
    {
      push: PropTypes.func.isRequired,

    },
  ).isRequired,

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFilters));
