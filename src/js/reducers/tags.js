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
    case 'DELETE_TAG':
      if(actions.payload.active === 'countries') {
        return {
          ...state,
          countries: state.countries.filter(item => actions.payload.button !== item),
        };
      } else {
        return {
          ...state,
          categories: state.categories.filter(item => actions.payload.button !== item)
        };
      }
      default:
      return state
  }
};

export default tags;
