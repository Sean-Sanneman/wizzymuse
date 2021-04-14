import {
  GET_PROFILE,
  GET_PROFILE_ME,
  GET_PROFILES,
  UPDATE_PROFILE,
  CLEAR_PROFILE_ME,
  CLEAR_PROFILE,
  CLEAR_PROFILES,
  PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  profileMe: null,
  profile: null,
  profiles: [],
  loading: true,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_ME:
      return {
        ...state,
        profileMe:
          state.profileMe !== null
            ? {
                ...state.profileMe,
                artistName: payload.artistName,
                band: payload.band,
                bio: payload.bio,
                city: payload.city,
                country: payload.country,
                dob: payload.dob,
                facebook: payload.facebook,
                firstName: payload.firstName,
                genres: payload.genres,
                instagram: payload.instagram,
                instruments: payload.instruments,
                lastName: payload.lastName,
                linkedin: payload.linkedin,
                phone: payload.phone,
                soundcloud: payload.soundcloud,
                state: payload.state,
                tiktok: payload.tiktok,
                twitch: payload.twitch,
                twitter: payload.twitter,
                website: payload.website,
                youtube: payload.youtube,
              }
            : payload,
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        message: payload.message,
      };
    case CLEAR_PROFILE_ME:
      return {
        ...state,
        profileMe: null,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: [],
        loading: false,
      };
    default:
      return state;
  }
}
