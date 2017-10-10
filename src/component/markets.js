import React from 'react'
import SearchWidget from '../containers/searchWidget'

const Markets = ({state, props}) => {

    return (
        <div className="row">
            <div className="col-3">
                <SearchWidget />
            </div>
            <div className="col-9">
                <h1>Markets</h1>
            </div>
        </div>
    )
};

export default Markets;
