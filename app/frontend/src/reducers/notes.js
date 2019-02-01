import { SET_NOTES } from '../actionTypes';

const initialState = {
  loading: false,
  notes: [],
  cachedNotes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NOTES:
      return {
        ...state,
        notes: payload,
        cachedNotes: [...payload]
      };
    default:
      return state;
  }
};
