import {
  GET_INSTRUMENTS,
  CLEAR_INSTRUMENTS,
  INSTRUMENT_ERROR,
} from '../actions/types';

const initialState = {
  instruments: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INSTRUMENTS:
      return {
        ...state,
        instruments: payload,
        loading: false,
      };
    default:
      return state;
  }
}
