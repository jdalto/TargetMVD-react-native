import userReducer from './userReducer';
import targetReducer from './targetReducer';
import { sessionImmutableReducer as session } from 'redux-react-native-session';
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

const rootReducer = combineReducers({
  userReducer,
  targetReducer,
  form,
  session
});

export default rootReducer;
