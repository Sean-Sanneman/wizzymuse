import { GET_CONNECTIONS, CONNECTIONS_ERROR } from '../actions/types';

const initialState = {
  connections: [],
  loading: true,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONNECTIONS:
      return {
        ...state,
        connections: payload,
        loading: false,
      };
    case CONNECTIONS_ERROR:
      return {
        ...state,
        connections: [],
        loading: true,
        message: payload,
      };
    default:
      return state;
  }
}
