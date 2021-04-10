import axios from 'axios';
import {
  GET_PROFILE,
  GET_PROFILES,
  UPDATE_PROFILE,
  SEARCH_PROFILES,
  CLEAR_PROFILE,
  CLEAR_PROFILES,
  PROFILE_ERROR,
  ACCOUNT_DELETED,
} from './types';

// Get current user's profile
export const getProfileMe = () => async (dispatch) => {
  console.log('inside getProfileMe');
  try {
    const res = await axios.get('/api/profiles/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
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
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Get a profile by profile ID
export const getProfileById = (profileId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profiles/${profileId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};

// Create or update a profile - note: the 'history' object has a push method within
export const editProfile = (profileData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/profiles', profileData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    // if we updated an existing profile, then stay on the page, otherwise redirect
    if (!edit) {
      history.push('/dashboard'); // redirecting in an action is different - we cannot use the Redirect -  we have to use the push method within the history object
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: 'Server error',
    });
  }
};
