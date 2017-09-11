import {combineReducers} from 'redux';
import search from './search';
import tags from './tags';

export default combineReducers({
    search,
    tags
});
