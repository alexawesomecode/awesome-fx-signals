import React from 'react';

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
  
          
  
        </form>
      </div>
    );
  };
  

  export default SearchFilters;