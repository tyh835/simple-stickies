import { AUTH_ERROR, LOADING_ERROR } from '../actionTypes';

const UNAUTHORIZED = 'Sorry, you need to be logged in to perform this action.';

export const handleNotesError = (dispatch, err) => {
  if (err.response && err.response.status === 401) {
    return dispatch({ type: AUTH_ERROR, payload: UNAUTHORIZED });
  }
  dispatch({ type: LOADING_ERROR, payload: err.message });
};

export const noteHasChanges = (currentNote, cachedNote) => {
  return !(
    currentNote.id === cachedNote.id &&
    currentNote.deleted === cachedNote.deleted &&
    currentNote.positionX === cachedNote.positionX &&
    currentNote.positionY === cachedNote.positionY &&
    currentNote.content === cachedNote.content &&
    currentNote.title === cachedNote.title
  );
};
