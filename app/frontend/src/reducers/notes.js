import { SET_NOTES } from '../actionTypes';

const initialState = {
  currentNotes: [],
  cachedNotes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NOTES:
      return {
        ...state,
        currentNotes: payload,
        cachedNotes: [...payload]
      };
    default:
      return state;
  }
};
