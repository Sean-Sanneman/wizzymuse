import axios from 'axios';
import { GET_FORUMS, FORUMS_ERROR } from './types';

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
