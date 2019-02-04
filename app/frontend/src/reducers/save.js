import { SAVE_FAIL, SAVE_SUCCESS, START_SAVE } from '../actionTypes';

const initialState = {
  saving: false,
  errors: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_FAIL:
      return {
        ...state,
        errors: [...state.errors, payload]
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        saving: false
      };
    case START_SAVE:
      return {
        ...state,
        saving: true
      };
    default:
      return state;
  }
};
