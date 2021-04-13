import axios from 'axios';
import {
  GET_PROFILE_ME,
  GET_PROFILE,
  GET_PROFILES,
  UPDATE_PROFILE,
  CLEAR_PROFILE_ME,
  CLEAR_PROFILE,
  CLEAR_PROFILES,
  PROFILE_ERROR,
  ACCOUNT_DELETED,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Get current user's profile
export const getProfileMe = () => async (dispatch) => {
  console.log('getProfileMe action called');
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/profiles/me');
    console.log('res from getProfileMe in actions', res.data);
    dispatch({
      type: GET_PROFILE_ME,
      payload: res.data,
    });
  } catch (err) {
    console.log('error from getProfileMe action');
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Get profiles (with or without query parameters)
export const getProfiles = (queryObj) => async (dispatch) => {
  console.log('getProfiles action called');
  console.log('queryObj inside getProfiles action', queryObj);
  const endpoint = queryObj
    ? `/api/profiles?instruments=${queryObj.instruments}&genres=${queryObj.genres}`
    : '/api/profiles?instruments=&genres=';
  console.log('endpoint inside getProfiles action', endpoint);
  try {
    const res = await axios.get(endpoint);
    console.log('res from getProfiles in actions', res.data);
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    console.log('error from getProfiles action');
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Get a profile by profile ID
export const getProfileById = (profileId) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(`/api/profiles/${profileId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Create or update a profile - note: the 'history' object has a push method within
export const editProfile = (profileData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profiles', profileData, config);
    history.push('/dashboard'); // redirecting in an action is different - we cannot use the Redirect -  we have to use the push method within the history object
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    getProfileMe();
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};
