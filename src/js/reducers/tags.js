const tags = (state = {
  countries: [],
  categories: []
},
actions) => {
  switch (actions.type) {
    case 'ADD_TAG':
    if(actions.payload.active === 'countries') {
      return {
        ...state,
        countries: [...state.countries, actions.payload.result.text],
      };
    } else {
      return {
        ...state,
        categories: [...state.categories, actions.payload.result.text],
      };
    }
    case 'REMOVE_TAG':
      return state
    default:
      return state
  }
}

export default tags;
