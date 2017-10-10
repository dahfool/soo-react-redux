import { connect } from 'react-redux'
import Markets from '../component/markets'

const mapStateToProps = (state, props) => (
    {
        state,
        props
    }
);

const mapDispatchToProps = (dispatch, props) => ({
});

const connectMarkets = connect(
    mapStateToProps,
    mapDispatchToProps
)(Markets);

export default connectMarkets;
