const searchProduct = (state = {
  country: {
    searchTerm: '',
    countryList: []
  },
  category: {
    searchTerm: '',
    categoryList: []
  },
  fetching: false,
  fetched: false,
  error: null
},
actions) => {
  switch (actions.type) {
    case 'FETCH_COUNTRIES_PENDING':
      return {...state, fetching: true};
    case 'FETCH_COUNTRIES_REJECTED':
      return {...state, fetching: false, error: actions.payload.data};
    case 'FETCH_COUNTRIES_FULFILLED':
      return {
        ...state,
        country: {
          searchTerm: actions.payload.searchTerm,
          countryList: actions.payload.data
        }
      }
    default:
      return state
  }
}

export default searchProduct;
