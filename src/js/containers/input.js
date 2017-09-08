import { connect } from 'react-redux'
import Input from '../component/input'
import search from '../actions/searchActions'

const mapStateToProps = (state, ownProps) => ({
  inputField: ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value, category) => {

    if(category === 'product') {
      dispatch(search.searchCategories(value))
    } else {
      dispatch(search.searchCountries(value))
    }
  }
})

const connectInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)

export default connectInput;
