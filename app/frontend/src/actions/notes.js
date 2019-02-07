import axios from 'axios';
import {
  ADD_NOTE,
  CLEAR_NEW_NOTE,
  DELETE_NOTE,
  MOVE_NOTE,
  SAVE_NOTE,
  SET_NOTES,
  UPDATE_NOTE,
  UPDATE_NEW_NOTE,
  LOADING_START,
  SAVE_START,
  LOADING_END,
  SAVE_END,
  CLOSE_MODAL
} from '../actionTypes';
import {
  getAuthConfig,
  handleNotesError,
  noteHasChanges
} from '../utils/notes';

export const deleteNote = id => async (dispatch, getState) => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this note? This action cannot be undone.'
  );
  if (!confirmed) return;

  const config = getAuthConfig(getState);

  dispatch({ type: LOADING_START });
  dispatch({ type: CLOSE_MODAL });

  try {
    const response = await axios.delete(`/api/notes/${id}/`, config);
    if (response.status === 204) {
      dispatch({ type: DELETE_NOTE, payload: id });
    } else {
      throw new Error('Failed to delete note, please try again.');
    }
  } catch (err) {
    handleNotesError(dispatch, err);
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const fetchNotes = () => async (dispatch, getState) => {
  const config = getAuthConfig(getState);

  dispatch({ type: LOADING_START });

  try {
    const response = await axios.get('/api/notes', config);
    dispatch({ type: SET_NOTES, payload: response.data });
  } catch (err) {
    handleNotesError(dispatch, err);
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const moveNote = (id, x, y) => ({
  type: MOVE_NOTE,
  payload: {
    id,
    x,
    y
  }
});

export const postNote = (e, note) => async (dispatch, getState) => {
  e.preventDefault();

  const config = getAuthConfig(getState);

  dispatch({ type: LOADING_START });
  dispatch({ type: CLOSE_MODAL });

  try {
    const response = await axios.post('/api/notes/', note, config);

    dispatch({ type: ADD_NOTE, payload: response.data });
    dispatch({ type: CLEAR_NEW_NOTE });
  } catch (err) {
    handleNotesError(dispatch, err);
  }

  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const saveNotes = e => (dispatch, getState) => {
  e.preventDefault();
  const { currentNotes, cachedNotes } = getState().notes;
  const config = getAuthConfig(getState);

  dispatch({ type: SAVE_START });
  currentNotes.forEach(async (note, i) => {
    if (noteHasChanges(note, cachedNotes[i])) {
      try {
        const response = await axios.put(
          `/api/notes/${note.id}/`,
          note,
          config
        );
        const updatedNote = response.data;
        dispatch({
          type: SAVE_NOTE,
          payload: updatedNote
        });
      } catch (err) {
        handleNotesError(dispatch, err);
      }
    }
  });

  setTimeout(() => {
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: SAVE_END });
  }, 800);
};

export const updateNote = (e, id) => {
  const { name, value } = e.target;
  return {
    type: UPDATE_NOTE,
    payload: {
      id,
      name,
      value
    }
  };
};

export const updateNewNote = e => {
  const { name, value } = e.target;
  return {
    type: UPDATE_NEW_NOTE,
    payload: {
      name,
      value
    }
  };
};
