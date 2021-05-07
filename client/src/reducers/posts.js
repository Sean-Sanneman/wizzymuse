import { GET_POSTS, GET_POST, POSTS_ERROR, POST_ERROR } from '../actions/types';

const initialState = {
  post: null,
  posts: [],
  loading: true,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state,
        posts: [],
        loading: false,
        message: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        post: null,
        loading: false,
        message: payload,
      };
    default:
      return state;
  }
}
