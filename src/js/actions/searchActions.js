const searchCountries = (text) => (

    (dispatch) => {
        dispatch({type: 'FETCH_PENDING'});

        fetch(`/api/countries/${text}`, { method: 'get'})
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'FETCH_COUNTRIES_FULFILLED', payload: { data, searchTerm: text} })
            })
            .catch((err) => { dispatch({type: 'FETCH_REJECTED', payload: err}) })
    }
);


const clearAllSearch = () => (
    {
      type: 'CLEAR_ALL_SEARCH',
    }
);

const searchCategories = (text) => (

    (dispatch) => {
        dispatch({type: 'FETCH_PENDING'});
        fetch(`/api/categories/${text}`, { method: 'get'})
            .then(response => response.json())
            .then((data) => {
                dispatch({type: 'FETCH_CATEGORIES_FULFILLED', payload: { data, searchTerm: text} })
            })
            .catch((err) => { dispatch({type: 'FETCH_REJECTED', payload: err}) })
    }
);

export default {
  searchCountries,
  searchCategories,
  clearAllSearch
};
