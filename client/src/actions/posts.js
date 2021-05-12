import axios from 'axios';
import {
  GET_POSTS,
  GET_POST,
  POSTS_ERROR,
  POST_ERROR,
  ADD_REPLY,
  DELETE_REPLY,
} from './types';

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
      type: POSTS_ERROR,
      payload: err.message,
    });
  }
};

// Get post by post ID
export const getPostById = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    dispatch({
      type: GET_POST,
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