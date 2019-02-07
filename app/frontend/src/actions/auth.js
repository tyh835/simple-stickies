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

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: LOADING_START });
  dispatch({ type: CLOSE_MODAL });

  const { token } = getState().auth;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.header['Authorization'] = `Token ${token}`;
  }

  try {
    const response = await axios.get('/api/auth/user', config);
    dispatch({ type: AUTH_SUCCESS, payload: response.data });
  } catch (err) {
    localStorage.removeItem('token');
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }

  setTimeout(() => {
    dispatch({ type: LOADING_END });
  }, 1400);
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
