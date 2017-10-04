const clearAllSearch = () => (
    {
      type: 'CLEAR_ALL_SEARCH',
    }
);

const search = (searchTerm, searchSection) => (

    async (dispatch) => {
        dispatch(pending());

        try {
            const response = await fetch(`http://localhost:3001/api/${searchSection}/${searchTerm}`, {method: 'get'});
            const data = await response.json();
            dispatch(fetched(data, searchTerm, searchSection))
        } catch (err) {
            dispatch(rejected(err));
        }
    }
);

const fetched = (data, searchTerm, searchSection) => ({
    type: 'FETCH_FULFILLED',
    payload: {
        data,
        searchTerm,
        searchSection
    }
});

const rejected = (err) => ({
    type: 'FETCH_REJECTED',
    payload: {
        payload: err
    }
});

const pending = () => ({type: 'FETCH_PENDING'});

export default {
    pending,
    fetched,
    rejected,
    search,
    clearAllSearch
};
