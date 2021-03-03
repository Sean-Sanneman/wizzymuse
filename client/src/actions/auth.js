import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Register user
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/users/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // we get the token back
    });
    // dispatch(loadUser()); // we immediately load the user
  } catch (err) {
    const errors = err.response.data.errors; // get the array of errors
    // @TODO: if there are errors we'll want to dispatch an alert for each of them
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
    const res = await axios.post('/api/users/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // we get the token back
    });
    // dispatch(loadUser()); // we immediately load the user
  } catch (err) {
    const errors = err.response.data.errors; // get the array of errors
    // @TODO: if there are errors we'll want to dispatch an alert for each of them
    dispatch({
      type: REGISTER_FAIL, // we don't need a payload
    });
  }
};
