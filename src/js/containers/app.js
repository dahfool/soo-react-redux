import { connect } from 'react-redux'
import App from '../component/app'

const mapStateToProps = (state, props) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (result, active) => {
    dispatch(tag.addTag({result, active}));
    dispatch(search.clearAllSearch());
  }
});

const connectApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectApp;
