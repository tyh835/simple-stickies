import { DELETE_NOTE, SET_NOTES } from '../actionTypes';

const initialState = {
  currentNotes: [],
  cachedNotes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_NOTE:
      return {
        ...state,
        currentNotes: state.currentNotes.filter(note => note.id === payload),
        cachedNotes: state.cachedNotes.filter(note => note.id === payload)
      };
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
