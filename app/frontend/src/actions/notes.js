import axios from 'axios';
import { SET_NOTES } from '../actionTypes';

export const fetchNotes = () => async dispatch => {
  try {
    const response = axios.get('/api/notes');
    dispatch({ type: SET_NOTES, payload: response });
  } catch (err) {
    console.log(err.message);
  }
};
