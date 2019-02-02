import {
  ADD_NOTE,
  CLEAR_NEW_NOTE,
  DELETE_NOTE,
  SET_NOTES,
  UPDATE_NEW_NOTE
} from '../actionTypes';

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
    case ADD_NOTE:
      return {
        ...state,
        currentNotes: [...state.currentNotes, payload],
        cachedNotes: [...state.cachedNotes, payload]
      };
    case CLEAR_NEW_NOTE:
      return {
        ...state,
        newNote: {
          title: '',
          content: ''
        }
      };
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
