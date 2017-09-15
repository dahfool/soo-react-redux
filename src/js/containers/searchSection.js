import { connect } from 'react-redux'
import SearchSection from '../component/searchSection'
import tag from '../actions/tagActions'
import search from '../actions/searchActions'

const mapStateToProps = (state, props) => ({});

const connectSearchSection = connect(
  mapStateToProps
)(SearchSection);

export default connectSearchSection;
