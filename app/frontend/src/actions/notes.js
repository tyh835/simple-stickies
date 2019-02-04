import axios from 'axios';
import {
  ADD_NOTE,
  CLEAR_NEW_NOTE,
  CLOSE_MODAL,
  DELETE_NOTE,
  LOADING_START,
  LOADING_END,
  LOADING_ERROR,
  MOVE_NOTE,
  SAVE_NOTE,
  SAVE_START,
  SAVE_END,
  SAVE_ERROR,
  SET_NOTES,
  UPDATE_NOTE,
  UPDATE_NEW_NOTE
} from '../actionTypes';
import { noteHasChanges } from '../utils/notes';

export const deleteNote = id => async dispatch => {
  if (
    !window.confirm(
      'Are you sure you want to delete this note? This action cannot be undone.'
    )
  )
    return;

  dispatch({ type: LOADING_START });
  try {
    const response = await axios.delete(`/api/notes/${id}/`);
    if (response.status === 204) {
      dispatch({ type: CLOSE_MODAL });
      dispatch({ type: DELETE_NOTE, payload: id });
    } else {
      throw new Error('Failed to delete note, please try again.');
    }
  } catch (err) {
    dispatch({ type: LOADING_ERROR, payload: err.message });
  }
  setTimeout(() => {
    dispatch({ type: LOADING_END });
  }, 1400);
};

export const fetchNotes = () => async dispatch => {
  dispatch({ type: LOADING_START });
  try {
    const response = await axios.get('/api/notes');
    dispatch({ type: SET_NOTES, payload: response.data });
  } catch (err) {
    dispatch({ type: LOADING_ERROR, payload: err.message });
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

export const postNote = (e, note) => async dispatch => {
  e.preventDefault();
  dispatch({ type: LOADING_START });
  try {
    const response = await axios.post('/api/notes/', note);
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: ADD_NOTE, payload: response.data });
    dispatch({ type: CLEAR_NEW_NOTE });
  } catch (err) {
    dispatch({ type: LOADING_ERROR, payload: err.message });
  }
  setTimeout(() => dispatch({ type: LOADING_END }), 1400);
};

export const saveNotes = (e, currentNotes, cachedNotes) => dispatch => {
  e.preventDefault();
  dispatch({ type: SAVE_START });
  currentNotes.forEach(async (note, i) => {
    if (noteHasChanges(note, cachedNotes[i])) {
      try {
        const response = await axios.put(`/api/notes/${note.id}/`, note);
        const updatedNote = response.data;
        dispatch({
          type: SAVE_NOTE,
          payload: { id: updatedNote.id, updatedNote }
        });
      } catch (err) {
        dispatch({ type: SAVE_ERROR, payload: err.message });
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
