import { combineReducers } from 'redux';
import auth from './auth';
import profiles from './profiles';

export default combineReducers({
  auth,
  profiles,
});
