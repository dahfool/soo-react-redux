import { connect } from 'react-redux'
import React from 'react'

const Markets = () => {

    return (
        <div>
            <h1>Markets</h1>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    props
});

const mapDispatchToProps = (dispatch, props) => ({
});

const connectMarkets = connect(
    mapStateToProps,
    mapDispatchToProps
)(Markets);

export default connectMarkets;
