import axios from 'axios'

const searchCountries = (text) => (

    (dispatch) => {
        dispatch({type: 'FETCH_PENDING'})
        axios.get("/api/countries")
            .then((response) => {
                dispatch({type: 'FETCH_COUNTRIES_FULFILLED', payload: {data: response.data, searchTerm: text}})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err})
            })
    }
);


const clearAllSearch = () => (
    {
      type: 'CLEAR_ALL_SEARCH',
    }
);

const searchCategories = (text) => (

    (dispatch) => {
        dispatch({type: 'FETCH_PENDING'})
        axios.get("/api/categories")
            .then((response) => {
                dispatch({type: 'FETCH_CATEGORIES_FULFILLED', payload: {data: response.data, searchTerm: text}})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err})
            })
    }
);

export default {
  searchCountries,
  searchCategories,
  clearAllSearch
};
