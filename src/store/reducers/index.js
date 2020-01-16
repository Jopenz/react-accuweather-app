import { combineReducers } from 'redux';
import  home from '../../home/store/reducers/home.reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        home
    });
export default createReducer;