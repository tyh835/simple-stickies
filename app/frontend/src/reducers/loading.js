import { LOADING_FAIL, LOADING_SUCCESS, START_LOADING } from '../actionTypes';

const initialState = {
  loading: false,
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
