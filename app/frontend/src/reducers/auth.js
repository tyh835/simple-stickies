import { UPDATE_LOGIN_FORM, UPDATE_REGISTRATION_FORM } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  loginForm: {
    username: '',
    password: ''
  },
  registrationForm: {
    username: '',
    email: '',
    password1: '',
    password2: ''
  },
  token: localStorage.getItem('token'),
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
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
