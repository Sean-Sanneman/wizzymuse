import { GET_POSTS, POSTS_ERROR } from '../actions/types';

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
    case POSTS_ERROR:
      return {
        ...state,
        posts: payload,
        loading: true,
        message: payload,
      };
    default:
      return state;
  }
}
