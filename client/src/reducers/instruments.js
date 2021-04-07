import {
  GET_INSTRUMENTS,
  CLEAR_INSTRUMENTS,
  INSTRUMENT_ERROR,
} from '../actions/types';

const initialState = {
  allInstruments: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INSTRUMENTS:
      return {
        ...state,
        allInstruments: payload,
        loading: false,
      };
    default:
      return state;
  }
}
