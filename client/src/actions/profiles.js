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
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/profiles/me');
    dispatch({
      type: GET_PROFILE_ME,
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

// Get profiles (with or without query parameters)
export const getProfiles = (queryObj) => async (dispatch) => {
  // build the endpoint
  let endpoint;
  if (queryObj) {
    endpoint = queryObj.hasOwnProperty('profileIds')
      ? `/api/profiles?instruments=&genres=&profileIds=${queryObj.profileIds}`
      : `/api/profiles?instruments=${queryObj.instruments}&genres=${queryObj.genres}&profileIds=`;
  } else {
    endpoint = '/api/profiles?instruments=&genres=&profileIds=';
  }

  try {
    const res = await axios.get(endpoint);
    dispatch({
      type: GET_PROFILES,
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
export const editProfile = (
  profileInput,
  instrumentInput,
  genreInput,
  history
) => async (dispatch) => {
  if (instrumentInput.length !== 0) {
    profileInput.instruments = instrumentInput;
  }
  if (genreInput.length !== 0) {
    profileInput.genres = genreInput;
  }
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.put('/api/profiles', profileInput, config);
    dispatch(getProfileMe());
    history.push('/dashboard'); // redirecting in an action is different - we cannot use the Redirect -  we have to use the push method within the history object
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};
