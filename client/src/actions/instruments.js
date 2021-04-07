import axios from 'axios';
import {
  GET_INSTRUMENTS,
  CLEAR_INSTRUMENTS,
  INSTRUMENT_ERROR,
} from '../actions/types';

// Get all instruments
export const getInstruments = () => async (dispatch) => {
  dispatch({ type: CLEAR_INSTRUMENTS });
  try {
    const res = await axios.get('/api/instruments');
    dispatch({
      type: GET_INSTRUMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: INSTRUMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
