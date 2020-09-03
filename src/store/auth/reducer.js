import {
  START_LOGIN,
  START_SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './action';

const DEFAULT_STATE = {
  loading: false,
  sigUpSuccess: false,
};

const reducerAuth = (state = DEFAULT_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case START_SIGN_UP:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        sigUpSuccess: true,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    //=====================
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    case START_LOGIN:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducerAuth;
