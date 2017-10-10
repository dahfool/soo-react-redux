import { connect } from 'react-redux'
import searchWidget from '../component/searchWidget'
import { navigate } from '../actions/routing'
import search from '../actions/searchActions'
import tag from '../actions/tagActions'

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
    },    onInputChange: (value, category) => {
        dispatch(search.search(value, category))
    },
    onDropdownClick: (result, active) => {
        dispatch(tag.addTag({result, active}));
        dispatch(search.clearAllSearch());
    },
    onTagClick: (button) => {
        dispatch(tag.deleteTag(button))
    }
});

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchWidget);

export default connectApp;
