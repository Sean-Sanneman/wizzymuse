import {
  GET_FORUMS,
  GET_FORUM,
  FORUMS_ERROR,
  FORUM_ERROR,
} from '../actions/types';

const initialState = {
  forum: null,
  forums: [],
  loading: true,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FORUMS:
      return {
        ...state,
        forums: payload,
        loading: false,
      };
    case GET_FORUM:
      return {
        ...state,
        forum: payload,
        loading: false,
      };
    case FORUMS_ERROR:
      return {
        ...state,
        forums: [],
        loading: false,
        message: payload,
      };
    case FORUM_ERROR:
      return {
        ...state,
        forum: null,
        loading: false,
        message: payload,
      };
    default:
      return state;
  }
}
