
const addTag = (tag) => (
  {
    type: 'ADD_TAG',
    payload: tag
  }
)

const deleteTag = (tag) => (
  {
    type: 'DELETE_TAG',
    payload: tag
  }
)

export default {
  addTag,
  deleteTag
};
