import { GET_GENRES, CLEAR_GENRES, GENRE_ERROR } from '../actions/types';

const initialState = {
  allGenres: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_GENRES:
      return {
        ...state,
        allGenres: payload,
        loading: false,
      };
    default:
      return state;
  }
}
