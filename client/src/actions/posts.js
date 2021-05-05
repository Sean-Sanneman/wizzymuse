import axios from 'axios';
import { GET_POSTS, POST_ERROR, ADD_REPLY, DELETE_REPLY } from './types';

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: POST_ERROR,
      payload: err.message,
    });
  }
};
