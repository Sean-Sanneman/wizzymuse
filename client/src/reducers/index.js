import { combineReducers } from 'redux';
import auth from './auth';
import profiles from './profiles';
import instruments from './instruments';

export default combineReducers({
  auth,
  profiles,
  instruments,
});
