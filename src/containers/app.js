import { connect } from 'react-redux'
import App from '../component/app'
import { navigate } from '../actions/routing'

const mapStateToProps = (state) => (
  {
    categories: state.search.categories.result,
    countries: state.search.countries.result,
    countriesTags: state.tags.countries,
    categoriesTags: state.tags.categories
  }
);

const mapDispatchToProps = (dispatch, props) => ({
    onSubmit: (e, page) => {
        e.preventDefault();
        dispatch(navigate(page));
    },
});

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default connectApp;
