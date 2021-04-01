import {
    GET_PROFILE,
    GET_PROFILES,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    PROFILE_ERROR,
  } from '../actions/types';
  const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {},
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false,
        };
      default:
        return state;
    }
  }