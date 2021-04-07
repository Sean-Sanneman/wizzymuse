import { combineReducers } from 'redux';
import auth from './auth';
import profiles from './profiles';
import instruments from './instruments';
import genres from './genres';

export default combineReducers({
  auth,
  profiles,
  instruments,
  genres,
});
