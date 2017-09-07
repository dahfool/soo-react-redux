
import axios from 'axios'

const searchCountries = (text) => (

    (dispatch) => {
        dispatch({type: 'FETCH_COUNTRIES_PENDING'})
        axios.get("")
            .then((response) => {
                dispatch({type: 'FETCH_COUNTRIES_FULFILLED', payload: {data: response.data, searchTerm: text}})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_COUNTRIES_REJECTED', payload: err})
            })
    }
)

const searchProducts = (text) => (
    {
      type: 'SEARCH_PRODUCTS',
      payload: { text }
    }
)

export default {
  searchCountries,
  searchProducts
};
