import axios from 'axios';
import { GET_CONNECTIONS, CONNECTIONS_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

// Get connections (with or without query parameters)
export const getConnections = (queryObj) => async (dispatch) => {
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  // build the endpoint
  let endpoint;
  if (queryObj) {
    endpoint = queryObj.hasOwnProperty('connectionIds')
      ? `/api/connections?connectionIds=${queryObj.connectionIds}`
      : '/api/connections?connectionIds=';
  } else {
    endpoint = '/api/connections?connectionIds=';
  }

  try {
    const res = await axios.get(endpoint);
    console.log('res.data', res.data);
    dispatch({
      type: GET_CONNECTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: CONNECTIONS_ERROR,
      payload: err.message,
    });
  }
};

// Create a connection
export const createConnection = (targetId, connectionStatus) => async (
  dispatch
) => {
  console.log('Create a connection with', targetId);
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const createdAt = new Date();
  const body = JSON.stringify({ targetId, connectionStatus, createdAt });
  console.log('body', body);
  try {
    const res = await axios.post('/api/connections', body, config);
    console.log('res.data', res.data);
    dispatch(getConnections());
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: CONNECTIONS_ERROR,
      payload: err.message,
    });
  }
};
