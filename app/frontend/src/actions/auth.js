import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  CLOSE_MODAL,
  LOADING_START,
  LOADING_ERROR,
  LOADING_END,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  UPDATE_LOGIN_FORM,
  UPDATE_REGISTRATION_FORM
} from './types';
import { getAuthConfig } from '../utils/auth';

export const loadUser = () => async dispatch => {
  const token = window.localStorage.getItem('token');

  if (token) {
    const config = {
      headers: {
        Authorization: `Token ${token}`
      }
    };

    try {
      const response = await axios.get('/api/auth/user', config);
      dispatch({ type: AUTH_SUCCESS, payload: { user: response.data, token } });
    } catch (err) {
      const ERROR = 'Your session has expired. Please log in again.';
      dispatch({ type: AUTH_ERROR, payload: ERROR });
      window.localStorage.removeItem('token');
    }
  }
};

export const login = e => async (dispatch, getState) => {
  e.preventDefault();
  const { username, password } = getState().auth.loginForm;

  const data = JSON.stringify({ username, password });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  dispatch({ type: LOADING_START });
  dispatch({ type: CLOSE_MODAL });

  try {
    const response = await axios.post('/api/auth/login', data, config);
    const { user, token } = response.data;

    dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });
    window.localStorage.setItem('token', token);
  } catch (err) {
    const ERROR = 'Failed to login. Please try again';
    dispatch({ type: LOGIN_ERROR, payload: ERROR });
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const logout = () => async (dispatch, getState) => {
  dispatch({ type: LOADING_START });

  try {
    const config = getAuthConfig(getState);
    const response = await axios.post('/api/auth/logout', null, config);

    if (response.status === 204) {
      dispatch({ type: LOGOUT_SUCCESS });
      window.localStorage.removeItem('token');
    }
  } catch (err) {
    const ERROR = 'Failed to logout. Please try again';
    dispatch({ type: LOADING_ERROR, payload: ERROR });
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const register = e => async (dispatch, getState) => {
  e.preventDefault();
  const {
    username,
    email,
    password,
    password2
  } = getState().auth.registrationForm;

  if (password !== password2) {
    const ERROR = 'Passwords do not match, please try again.';
    dispatch({ type: CLOSE_MODAL });
    return dispatch({ type: REGISTRATION_ERROR, payload: ERROR });
  }

  const data = JSON.stringify({ username, email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  dispatch({ type: LOADING_START });
  dispatch({ type: CLOSE_MODAL });

  try {
    const response = await axios.post('/api/auth/register', data, config);
    const { user, token } = response.data;
    dispatch({ type: REGISTRATION_SUCCESS, payload: { user, token } });
    window.localStorage.setItem('token', token);
  } catch (err) {
    let message = 'Unable to register. Please try again';

    if (err.response.data.username) {
      message = `Username: ${err.response.data.username[0]}`;
    } else if (err.response.data.email) {
      message = `Email: ${err.response.data.email[0]}`;
    } else if (err.response.data.password) {
      message = `Password: ${err.response.data.password[0]}`;
    }

    dispatch({ type: REGISTRATION_ERROR, payload: message });
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const updateLoginForm = e => {
  const { name, value } = e.target;
  return {
    type: UPDATE_LOGIN_FORM,
    payload: {
      name,
      value
    }
  };
};
export const updateRegistrationForm = e => {
  const { name, value } = e.target;
  return {
    type: UPDATE_REGISTRATION_FORM,
    payload: {
      name,
      value
    }
  };
};
