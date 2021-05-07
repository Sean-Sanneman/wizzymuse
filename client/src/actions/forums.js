import axios from 'axios';
import { GET_FORUMS, GET_FORUM, FORUMS_ERROR, FORUM_ERROR } from './types';

// Get forums
export const getForums = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/forums');
    dispatch({
      type: GET_FORUMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FORUMS_ERROR,
      payload: err.message,
    });
  }
};

// Get forum by forum ID
export const getForumById = (forumId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/forums/${forumId}`);
    dispatch({
      type: GET_FORUM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FORUM_ERROR,
      payload: err.message,
    });
  }
};
