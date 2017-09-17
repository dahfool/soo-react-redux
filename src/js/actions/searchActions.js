const searchCountries = (text) => (

    async (dispatch) => {
        dispatch({type: 'FETCH_PENDING'});

        try {
            const response = await fetch(`/api/countries/${text}`, {method: 'get'});
            const data = await response.json();
            dispatch({type: 'FETCH_COUNTRIES_FULFILLED', payload: {data, searchTerm: text}})
        } catch (err) {
            dispatch({type: 'FETCH_REJECTED', payload: err});
        }

    }
);


const clearAllSearch = () => (
    {
      type: 'CLEAR_ALL_SEARCH',
    }
);

const searchCategories = (text) => (

   async (dispatch) => {
        dispatch({type: 'FETCH_PENDING'});

        try {
            const response = await fetch(`/api/categories/${text}`, {method: 'get'});
            const data = await response.json();
            dispatch({type: 'FETCH_CATEGORIES_FULFILLED', payload: { data, searchTerm: text} })
        } catch (err) {
            dispatch({type: 'FETCH_REJECTED', payload: err})
        }

    }
);

export default {
  searchCountries,
  searchCategories,
  clearAllSearch
};
