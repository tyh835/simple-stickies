import uuid from 'uuid/v4';
import {
  AUTH_ERROR,
  DISMISS_ERROR,
  LOADING_START,
  LOADING_END,
  LOADING_ERROR,
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
    case LOADING_ERROR:
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
    default:
      return state;
  }
};
