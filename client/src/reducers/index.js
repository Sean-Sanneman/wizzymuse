import { combineReducers } from 'redux';
import auth from './auth';
import connections from './connections';
import profiles from './profiles';
import instruments from './instruments';
import genres from './genres';
import forums from './forums';
import posts from './posts';

export default combineReducers({
  auth,
  connections,
  profiles,
  instruments,
  genres,
  forums,
  posts,
});
