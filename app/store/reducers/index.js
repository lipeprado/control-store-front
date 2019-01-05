import { combineReducers } from 'redux';
import auth from './auth';

const appReducer = combineReducers({
  authState: auth
});

export default appReducer;
