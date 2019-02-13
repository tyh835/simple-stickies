import {
  ADD_NOTE,
  CLEAR_NEW_NOTE,
  DELETE_NOTE,
  MOVE_NOTE,
  SAVE_NOTE,
  SET_NOTES,
  UPDATE_NOTE,
  UPDATE_NEW_NOTE,
  LOGOUT_SUCCESS
} from '../actionTypes';

const tutorialNotes = [
  {
    id: 1,
    title: 'Welcome!',
    content: 'To start, simply sign up and begin creating notes!',
    positionX: 32,
    positionY: 32
  },
  {
    id: 2,
    title: 'Editing notes',
    content: 'To edit, double click on the note you want to edit.',
    positionX: 362,
    positionY: 32
  },
  {
    id: 3,
    title: 'Draggable!',
    content:
      'You can drag and drop the notes to place them where ever! Just make sure to save your changes.',
    positionX: 692,
    positionY: 32
  },
  {
    id: 4,
    title: 'Terms and Conditions',
    content:
      'Simple Stickies is a personal project. By using this site you release the site of all liabilities associated with your use.',
    positionX: 32,
    positionY: 362
  },
  {
    id: 5,
    title: 'Privacy Policy',
    content:
      'Simple Stickies does and will not share your personal information with any third-party applications.',
    positionX: 362,
    positionY: 362
  }
];

const initialState = {
  currentNotes: tutorialNotes,
  cachedNotes: tutorialNotes,
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
        currentNotes: state.currentNotes.filter(note => note.id !== payload),
        cachedNotes: state.cachedNotes.filter(note => note.id !== payload)
      };
    case MOVE_NOTE:
      return {
        ...state,
        currentNotes: state.currentNotes.map(note => {
          if (note.id !== payload.id) return note;
          else
            return {
              ...note,
              positionX: payload.x,
              positionY: payload.y
            };
        })
      };
    case SAVE_NOTE:
      return {
        ...state,
        cachedNotes: state.cachedNotes.map(note => {
          if (note.id !== payload.id) return note;
          else return payload;
        })
      };
    case SET_NOTES:
      return {
        ...state,
        currentNotes: payload,
        cachedNotes: [...payload]
      };
    case UPDATE_NOTE:
      return {
        ...state,
        currentNotes: state.currentNotes.map(note => {
          if (note.id !== payload.id) return note;
          else
            return {
              ...note,
              [payload.name]: payload.value
            };
        })
      };
    case UPDATE_NEW_NOTE:
      return {
        ...state,
        newNote: {
          ...state.newNote,
          [payload.name]: payload.value
        }
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
