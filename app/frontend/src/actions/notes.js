import axios from 'axios';
import { SET_NOTES, LOADING_SUCCESS, LOADING_FAIL } from '../actionTypes';

export const fetchNotes = () => async dispatch => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get('/api/notes');
    dispatch({ type: SET_NOTES, payload: response });
    setTimeout(() => dispatch({ type: LOADING_SUCCESS }), 500);
  } catch (err) {
    dispatch({ type: LOADING_FAIL, payload: err.message });
  }
};
