import symbols from '../helpers/symbols'

const setFilters = (obj, nextFilters) => {
    nextFilters = { ...nextFilters, ...obj };
    return nextFilters;
  };

  const fixedRoute = e => {

    if (e !== '') {
      let route = e.toUpperCase();
      if (symbols.includes(e)) {
        const symbolFixed = e.toLowerCase().slice(0, 3) + e.toLowerCase().slice(-3);
        return '/details/' + symbolFixed
      }
    return undefined;
    }
    return []
  }

  export {fixedRoute, setFilters}