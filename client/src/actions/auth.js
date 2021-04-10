import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE_ME,
  CLEAR_PROFILE,
  CLEAR_PROFILES,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { getProfileMe } from './profiles';

// Load user
export const loadUser = () => async (dispatch) => {
  console.log('inside loadUser action');
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    console.log('res from server after calling /api/auth', res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log(
      'inside loadUser action, immediately before calling getProfileMe'
    );
    dispatch(getProfileMe()); // we immediately load the user's profile
    console.log(
      'inside loadUser action, immediately after calling getProfileMe'
    );
  } catch (err) {
    console.log('inside loadUser action, got error');
    console.log(err.message);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register = ({
  firstName,
  lastName,
  email,
  city,
  state,
  country,
  username,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    city,
    state,
    country,
    username,
    password,
  });

  try {
    const res = await axios.post('/api/users/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // we get the token back
    });
    dispatch(loadUser()); // we immediately load the user
  } catch (err) {
    console.log(err);
    dispatch({
      type: REGISTER_FAIL, // we don't need a payload
    });
  }
};

// Login user
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // we get the token back
    });
    dispatch(loadUser()); // we immediately load the user
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL, // we don't need a payload
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE_ME,
  });
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: CLEAR_PROFILES,
  });
};
