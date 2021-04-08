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
  try {
    const res = await axios.get('/api/profiles/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get profiles (with or without query parameters)
export const getProfiles = (queryObj) => async (dispatch) => {
  console.log('queryObj', queryObj);
  dispatch({ type: CLEAR_PROFILES });
  // Build the endpoint
  // let endpoint = '/api/profiles';
  // if (queryObj) {
  //   console.log('there is a query object, so we edit the endpoint');
  //   endpoint += `?instruments=${queryObj.instruments}&genres=${queryObj.genres}`;
  //   console.log('inside switch endpoint', endpoint);
  // }
  // console.log('endpoint', endpoint);
  try {
    const res = await axios.get(
      `/api/profiles?instruments=${queryObj.instruments}&genres=${queryObj.genres}`
    );
    console.log('res.data', res.data);
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get a profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profiles/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
