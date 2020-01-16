import { combineReducers } from 'redux';
import home from './home.reducers';

const homeReducer = combineReducers({
    home,
});

export default homeReducer;