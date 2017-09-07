const searchCountries = (text) => {
    return {
        type: 'SEARCH_COUNTRIES',
        payload: { text }
    }
}

const searchProducts = (text) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: { text }
    }
}

export default {
  searchCountries,
  searchProducts
};
