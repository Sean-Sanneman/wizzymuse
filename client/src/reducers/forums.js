import { GET_FORUMS, FORUMS_ERROR } from '../actions/types';

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
    case FORUMS_ERROR:
      return {
        ...state,
        forums: payload,
        loading: true,
        message: payload,
      };
    default:
      return state;
  }
}
