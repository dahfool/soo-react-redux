const search = (state = {
  country: {
    searchTerm: '',
    countryList: []
  },
  category: {
    searchTerm: '',
    categoryList: []
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
      return {...state, fetching: false, error: actions.payload.data};
    case 'FETCH_COUNTRIES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        country: {
          searchTerm: actions.payload.searchTerm,
          countryList: actions.payload.data
        },
        activeField: 'countries'
      }
    case 'FETCH_CATEGORIES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        category: {
          searchTerm: actions.payload.searchTerm,
          categoryList: actions.payload.data
        },
        activeField: 'categories'
      }
    case 'CLEAR_ALL_SEARCH':
      return {
        ...state,
        country: {
          ...state.country,
          countryList: []
        },
        category: {
          ...state.category,
          categoryList: []
        },
      }
    default:
      return state
  }
}

export default search;
