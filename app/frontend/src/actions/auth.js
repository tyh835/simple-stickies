import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  CLOSE_MODAL,
  LOADING_START,
  LOADING_ERROR,
  LOADING_END,
  LOGOUT_SUCCESS,
  UPDATE_LOGIN_FORM,
  UPDATE_REGISTRATION_FORM
} from '../actionTypes';
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
      window.localStorage.removeItem('token');
      const ERROR = 'Your session has expired. Please log in again.';
      dispatch({ type: AUTH_ERROR, payload: ERROR });
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
    dispatch({ type: AUTH_SUCCESS, payload: { user, token } });
    window.localStorage.setItem('token', token);
  } catch (err) {
    const ERROR = 'Failed to login. Please try again';
    dispatch({ type: AUTH_ERROR, payload: ERROR });
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
    console.log(err);
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

  const data = JSON.stringify({ username, email, password });
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
    dispatch({ type: AUTH_SUCCESS, payload: { user, token } });
    window.localStorage.setItem('token', token);
  } catch (err) {
    const ERROR = 'Failed to login. Please try again';
    dispatch({ type: AUTH_ERROR, payload: ERROR });
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
