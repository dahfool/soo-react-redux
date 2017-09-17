import { connect } from 'react-redux'
import SearchSection from '../component/searchSection'
import search from '../actions/searchActions'
import tag from '../actions/tagActions'

const mapStateToProps = (state, props) => ({
    props
});

const mapDispatchToProps = (dispatch, props) => ({
    onInputChange: (value) => {
        if(props.id === 'categories') {
            dispatch(search.searchCategories(value))
        } else {
            dispatch(search.searchCountries(value))
        }
    },
    onDropdownClick: (result, active) => {
        dispatch(tag.addTag({result, active}));
        dispatch(search.clearAllSearch());
    },
    onTagClick: (button) => {
        dispatch(tag.deleteTag(button))
    }
});

const connectSearchSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection);

export default connectSearchSection;
