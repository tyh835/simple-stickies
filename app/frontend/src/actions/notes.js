import axios from 'axios';
import {
  LOADING_SUCCESS,
  LOADING_FAIL,
  SET_NOTES,
  START_LOADING
} from '../actionTypes';

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
