import { connect } from 'react-redux'
import SearchSection from '../component/searchSection'
import tag from '../actions/tagActions'
import search from '../actions/searchActions'

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) => ({});

const connectSearchSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection);

export default connectSearchSection;
