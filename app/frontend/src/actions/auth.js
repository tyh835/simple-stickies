import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  CLOSE_MODAL,
  LOADING_START,
  LOADING_END,
  UPDATE_LOGIN_FORM,
  UPDATE_REGISTRATION_FORM
} from '../actionTypes';

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
      localStorage.removeItem('token');
      const message = 'Your session has expired. Please log in again.';
      dispatch({ type: AUTH_ERROR, payload: message });
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
    const message = 'Failed to login. Please try again';
    dispatch({ type: AUTH_ERROR, payload: message });
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
