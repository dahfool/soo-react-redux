const searchProduct = (state = {
  country: {
    searchTerm: ""
  },
  products: {
    searchTerm: ""
  }
},
action) => {
  switch (action.type) {
    case 'SEARCH_COUNTRIES':
      return {
        ...state,
        country: {
          searchTerm: action.payload.text
        }
      }
    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        products: {
          searchTerm: action.payload.text
        }
      }
      default:
        return state
  }
}

export default searchProduct;
