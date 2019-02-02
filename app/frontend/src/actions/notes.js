import axios from 'axios';
import {
  DELETE_NOTE,
  LOADING_SUCCESS,
  LOADING_FAIL,
  SET_NOTES,
  START_LOADING
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
