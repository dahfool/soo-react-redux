import { connect } from 'react-redux'
import Input from '../component/input'
import search from '../actions/searchActions'

const mapStateToProps = (state, props) => ({
  inputField: props
});

const mapDispatchToProps = (dispatch, props) => ({
  onChange: (value) => {
    if(props.id === 'categories') {
      dispatch(search.searchCategories(value))
    } else {
      dispatch(search.searchCountries(value))
    }
  }
});

const connectInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

export default connectInput;
