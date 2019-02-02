import { DELETE_NOTE, SET_NOTES, UPDATE_NEW_NOTE } from '../actionTypes';

const initialState = {
  currentNotes: [],
  cachedNotes: [],
  newNote: {
    title: '',
    content: ''
  }
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
    case UPDATE_NEW_NOTE:
      const { name, value } = payload;
      return {
        ...state,
        newNote: {
          ...state.newNote,
          [name]: value
        }
      };
    default:
      return state;
  }
};
