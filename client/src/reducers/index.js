import { combineReducers } from 'redux';
import auth from './auth';
import profiles from './profiles';
import connections from './connections';
import instruments from './instruments';
import genres from './genres';

export default combineReducers({
  auth,
  profiles,
  connections,
  instruments,
  genres,
});
