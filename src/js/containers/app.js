import { connect } from 'react-redux'
import App from '../component/app'

const mapStateToProps = (state) => (
  {
    categories: state.search.categories.result,
    countries: state.search.countries.result,
    countriesTags: state.tags.countries,
    categoriesTags: state.tags.categories
  }
);

const connectApp = connect(
  mapStateToProps
)(App);

export default connectApp;
