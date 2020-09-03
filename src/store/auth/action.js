//action type
export const LOGIN = "LOGIN";
export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const START_SIGN_UP = "START_SIGN_UP";

//action
const login = (payload) => ({ type: LOGIN, payload });
const startLogin = (payload) => ({ type: START_LOGIN, payload });
const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
const loginFail = (payload) => ({ type: LOGIN_FAIL, payload });

const signUp = (payload) => ({ type: SIGN_UP, payload });
const startSignUp = (payload) => ({ type: START_SIGN_UP, payload });
const signUpFail = (payload) => ({ type: SIGN_UP_FAIL, payload });
const signUpSUCCESS = (payload) => ({ type: SIGN_UP_SUCCESS, payload });

const actionAuth = {
  startSignUp,
  signUpSUCCESS,
  signUpFail,
  signUp,

  login,
  startLogin,
  loginSuccess,
  loginFail,
};

export default actionAuth;
