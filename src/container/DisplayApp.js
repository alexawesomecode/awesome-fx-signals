import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';
import Card from '../components/Card.js';
import search from '../components/styles/searchfilter.module.css';

const mapStateToProps = state => ({ prices: state.prices });

const DisplayApp = props => {
  const { filters, prices } = props;

  const filterTags = [];
  const obj = Object.entries(filters);
  for (const [key, values] of obj) {
    if (values === true) filterTags.push(key);
  }


  return (
    <div>


      <SearchFilters />

      <div className={search.container_search}>


        {prices !== undefined ? prices.map(elem => {
          const change = parseFloat(elem.change);
          const chg_per = parseFloat(elem.chg_per);
          if (filterTags.includes('houruptrend')) {
            if (filterTags.includes('dayuptrend')) {
              if ((change > 0) && (chg_per > 0)) {
                return <Card indicators={elem} key={elem.symbol} />;
              }
            } else if ((change > 0) && (chg_per < 0)) {
              return <Card indicators={elem} key={elem.symbol} />;
            }
          } else if (filterTags.includes('dayuptrend')) {
            if ((change < 0) && (chg_per > 0)) {
              return <Card indicators={elem} key={elem.symbol} />;
            }
          } else if (filterTags.length < 1) {
            if ((change < 0) && (chg_per < 0)) {
              return <Card indicators={elem} key={elem.symbol} />;
            }
          }
          return undefined;
        }) : <span className={search.loading}> LOADING </span>}

      </div>
    </div>
  );
};


DisplayApp.propTypes = {

    filters: PropTypes.objectOf(PropTypes.object).isRequired,
    filters: PropTypes.shape({houruptrend: PropTypes.bool.isRequired}),  

    prices: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, null)(DisplayApp);
