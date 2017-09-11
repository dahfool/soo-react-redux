import { connect } from 'react-redux'
import Tag from '../component/tag'
import tag from '../actions/tagActions'

const mapStateToProps = (state, ownProps) => ({
  buttons: ownProps.data,
  active: ownProps.active
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (button) => {
    dispatch(tag.deleteTag(button))
  }
})

const connectTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag)

export default connectTag;
