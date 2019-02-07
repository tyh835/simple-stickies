import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOADING_START,
  LOADING_END,
  UPDATE_LOGIN_FORM,
  UPDATE_REGISTRATION_FORM
} from '../actionTypes';

export const loadUser = () => async dispatch => {};

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
