// import {combineReducers} from 'redux';
import userReducer from './userReducer';

import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

const rootReducer = combineReducers({
    userReducer,
    form
});

export default rootReducer;