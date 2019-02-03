import axios from 'axios';
import {
  ADD_NOTE,
  CLEAR_NEW_NOTE,
  CLOSE_MODAL,
  DELETE_NOTE,
  LOADING_SUCCESS,
  LOADING_FAIL,
  MOVE_NOTE,
  SET_NOTES,
  START_LOADING,
  UPDATE_NEW_NOTE
} from '../actionTypes';

export const deleteNote = id => async dispatch => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/notes/${id}/`);
    if (response.status === 204) {
      setTimeout(() => {
        dispatch({ type: DELETE_NOTE, payload: response.data.id });
        dispatch({ type: LOADING_SUCCESS });
      }, 1400);
    } else {
      throw new Error('Failed to delete note, please try again.');
    }
  } catch (err) {
    dispatch({ type: LOADING_FAIL, payload: err.message });
  }
};

export const fetchNotes = () => async dispatch => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get('/api/notes');
    setTimeout(() => {
      dispatch({ type: SET_NOTES, payload: response.data });
      dispatch({ type: LOADING_SUCCESS });
    }, 1400);
  } catch (err) {
    dispatch({ type: LOADING_FAIL, payload: err.message });
  }
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
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post('/api/notes/', note);
    setTimeout(() => {
      dispatch({ type: ADD_NOTE, payload: response.data });
      dispatch({ type: LOADING_SUCCESS });
      dispatch({ type: CLOSE_MODAL });
      dispatch({ type: CLEAR_NEW_NOTE });
    }, 1400);
  } catch (err) {
    dispatch({ type: LOADING_FAIL, payload: err.message });
  }
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
