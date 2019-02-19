import uuid from 'uuid/v4';
import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  DISMISS_ERROR,
  LOADING_START,
  LOADING_END,
  LOADING_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
  SAVE_START,
  SAVE_END,
  SAVE_ERROR
} from '../actionTypes';

const initialState = {
  saving: false,
  loading: false,
  errors: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_ERROR:
    case LOADING_ERROR:
    case LOGIN_ERROR:
    case REGISTRATION_ERROR:
    case SAVE_ERROR:
      return {
        ...state,
        errors: [
          ...state.errors,
          {
            message: payload,
            key: uuid()
          }
        ]
      };
    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        errors: []
      };
    case DISMISS_ERROR:
      return {
        ...state,
        errors: state.errors.filter(error => error.key !== payload)
      };
    case LOADING_START:
      return {
        ...state,
        loading: true
      };
    case LOADING_END:
      return {
        ...state,
        loading: false
      };

    case SAVE_START:
      return {
        ...state,
        saving: true
      };
    case SAVE_END:
      return {
        ...state,
        saving: false
      };
    default:
      return state;
  }
};
