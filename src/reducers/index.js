import {combineReducers} from 'redux';
import search from './search';
import tags from './tags';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    search,
    tags,
    routing: routerReducer
});
