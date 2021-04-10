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
// import { loadUser } from './auth';

// Get current user's profile
export const getProfileMe = () => async (dispatch) => {
  console.log('inside getProfileMe action');
  // dispatch({ type: CLEAR_PROFILE_ME });
  // console.log(
  //   'inside getProfileMe action, immediately after dispatch clearprofileme'
  // );
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    console.log(
      'inside getProfileMe action, immediately before making request to server'
    );
    const res = await axios.get('/api/profiles/me');
    console.log(
      'inside getProfileMe action, immediately after making request to server'
    );
    console.log('res from server after calling /api/profiles/me', res);
    dispatch({
      type: GET_PROFILE_ME,
      payload: res.data,
    });
    // console.log(
    //   'inside getProfileMe action, immediately before calling loadUser'
    // );
    // dispatch(loadUser()); // we immediately load the user
    // console.log(
    //   'inside getProfileMe action, immediately after calling loadUser'
    // );
  } catch (err) {
    console.log('inside getProfileMe action, got error');
    console.log(err.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Get profiles (with or without query parameters)
export const getProfiles = (queryObj) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILES });
  try {
    const res = await axios.get(
      `/api/profiles?instruments=${queryObj.instruments}&genres=${queryObj.genres}`
    );
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
export const editProfile = (profileData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/profiles', profileData, config);
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
