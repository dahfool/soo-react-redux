import { connect } from 'react-redux'
import Tag from '../component/tag'
import search from '../actions/searchActions'

const mapStateToProps = (state, ownProps) => ({
  buttons: ownProps.data
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

const connectTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag)

export default connectTag;
