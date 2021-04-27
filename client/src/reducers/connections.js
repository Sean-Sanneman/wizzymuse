import {
  GET_CONNECTIONS_ME,
  GET_CONNECTIONS,
  CONNECTIONS_ME_ERROR,
  CONNECTIONS_ERROR,
  CONNECTION_ERROR,
} from '../actions/types';

const initialState = {
  connectionsMe: [],
  connections: [],
  loading: true,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONNECTIONS_ME:
      return {
        ...state,
        connectionsMe: payload,
        loading: false,
      };
    case GET_CONNECTIONS:
      return {
        ...state,
        connections: payload,
        loading: false,
      };
    case CONNECTIONS_ME_ERROR:
      return {
        ...state,
        connectionsMe: [],
        loading: true,
        message: payload,
      };
    case CONNECTIONS_ERROR:
      return {
        ...state,
        connections: [],
        loading: true,
        message: payload,
      };
    case CONNECTION_ERROR:
      return {
        ...state,
        loading: true,
        message: payload,
      };
    default:
      return state;
  }
}
