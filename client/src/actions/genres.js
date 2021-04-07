import axios from 'axios';
import { GET_GENRES, CLEAR_GENRES, GENRE_ERROR } from '../actions/types';

// Get all genres
export const getGenres = () => async (dispatch) => {
  dispatch({ type: CLEAR_GENRES });
  try {
    const res = await axios.get('/api/genres');
    dispatch({
      type: GET_GENRES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GENRE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
