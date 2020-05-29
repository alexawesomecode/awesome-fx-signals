const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRICES':
      return { ...state, prices: [...action.prices] };

    case 'FILTER_TAGS':
      return { ...state, filters: action.filters };

    default:
      return state;
  }
};
export default reducer;
