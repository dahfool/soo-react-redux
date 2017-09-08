import { connect } from 'react-redux'
import Dropdown from '../component/dropdown'
import search from '../actions/searchActions'

const mapStateToProps = (state, ownProps) => ({
  results: ownProps.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

const connectDropdown = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)

export default connectDropdown;
