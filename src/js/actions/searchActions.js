const clearAllSearch = () => (
    {
      type: 'CLEAR_ALL_SEARCH',
    }
);

const search = (searchTerm, searchSection) => (

    async (dispatch) => {
        dispatch({type: 'FETCH_PENDING'});

        try {
            const response = await fetch(`/api/${searchSection}/${searchTerm}`, {method: 'get'});
            const data = await response.json();
            dispatch({type: 'FETCH_FULFILLED', payload: {data, searchTerm, searchSection}})
        } catch (err) {
            dispatch({type: 'FETCH_REJECTED', payload: err});
        }

    }
);

export default {
  search,
  clearAllSearch
};
