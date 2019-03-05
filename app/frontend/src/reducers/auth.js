import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  UPDATE_LOGIN_FORM,
  UPDATE_REGISTRATION_FORM
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loginForm: {
    username: '',
    password: ''
  },
  registrationForm: {
    username: '',
    email: '',
    password: '',
    password2: ''
  },
  token: null,
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_ERROR:
    case LOGIN_ERROR:
    case REGISTRATION_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null
      };
    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginForm: {
          username: '',
          password: ''
        },
        registrationForm: {
          username: '',
          email: '',
          password: '',
          password2: ''
        },
        token: payload.token,
        user: payload.user
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null
      };
    case UPDATE_LOGIN_FORM:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [payload.name]: payload.value
        }
      };
    case UPDATE_REGISTRATION_FORM:
      return {
        ...state,
        registrationForm: {
          ...state.registrationForm,
          [payload.name]: payload.value
        }
      };
    default:
      return state;
  }
};
