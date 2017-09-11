import { connect } from 'react-redux'
import Dropdown from '../component/dropdown'
import tag from '../actions/tagActions'
import search from '../actions/searchActions'

const mapStateToProps = (state, props) => ({
  results: props.data,
  active: props.active
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (result, active) => {
    dispatch(tag.addTag({result, active}));
    dispatch(search.clearAllSearch());
  }
});

const connectDropdown = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);

export default connectDropdown;
