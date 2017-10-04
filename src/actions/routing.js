import { push } from 'react-router-redux'

export const navigate = (page) => (
    (dispatch) => {
        dispatch(push(`/${page}`))
    }
);
