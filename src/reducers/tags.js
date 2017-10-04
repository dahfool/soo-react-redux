const tags = (state = {
  countries: [],
  categories: []
},
action
) => {
  switch (action.type) {
    case 'ADD_TAG': {
      const {payload: {result, active}} = action
      return {
        ...state,
        [active]: [...state[active], result],
      };
    }
    case 'DELETE_TAG': {
      const {payload: {button, active}} = action
      return {
        ...state,
        [active]: state[active].filter(item => button !== item),
      };
    }
    default:
      return state
  }
};

export default tags;
