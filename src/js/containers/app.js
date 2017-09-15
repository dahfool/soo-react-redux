import { connect } from 'react-redux'
import App from '../component/app'

const mapStateToProps = (state) => (
  {
    categories: state.search.category.categoryList,
    countries: state.search.country.countryList,
    countriesTags: state.tags.countries,
    categoriesTags: state.tags.categories
  }
);

const connectApp = connect(
  mapStateToProps
)(App);

export default connectApp;
