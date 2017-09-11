import { connect } from 'react-redux'
import Tag from '../component/tag'
import tag from '../actions/tagActions'

const mapStateToProps = (state, props) => ({
  buttons: props.data,
  active: props.active
});

const mapDispatchToProps = (dispatch  ) => ({
  onClick: (button) => {
    dispatch(tag.deleteTag(button))
  }
});

const connectTag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);

export default connectTag;
