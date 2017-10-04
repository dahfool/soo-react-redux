const search = (state = {
  countries: {
    searchTerm: '',
    result: []
  },
  categories: {
    searchTerm: '',
    result: []
  },
  activeField: null,
  fetching: false,
  fetched: false,
  error: null
},
actions) => {
  switch (actions.type) {
    case 'FETCH_PENDING':
      return {...state, fetching: true};
    case 'FETCH_REJECTED':
      return {...state, fetching: false, error: actions.payload};
    case 'FETCH_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        [actions.payload.searchSection] : {
            searchTerm: actions.payload.searchTerm,
            result: actions.payload.data
        },
        activeField: actions.payload.searchSection
      };
    case 'CLEAR_ALL_SEARCH':
      return {
        ...state,
        countries: {
          ...state.countries,
          result: []
        },
        categories: {
          ...state.categories,
          result: []
        },
      };
    default:
      return state
  }
};

export default search;
