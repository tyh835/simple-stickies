import {
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
        errors: [...state.errors, payload]
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
        errors: [...state.errors, payload]
      };
    default:
      return state;
  }
};
