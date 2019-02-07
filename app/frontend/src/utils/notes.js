import { AUTH_ERROR, LOADING_ERROR } from '../actionTypes';

export const getAuthConfig = getState => {
  const { token } = getState().auth;
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    }
  };
};

const UNAUTHORIZED = 'Request failed with status code 401';
const UNAUTHORIZED_MESSAGE =
  'Sorry, you need to be logged into perform this action';

export const handleNotesError = (dispatch, err) => {
  const { message } = err;

  if (message === UNAUTHORIZED) {
    dispatch({ type: AUTH_ERROR, payload: UNAUTHORIZED_MESSAGE });
  } else {
    dispatch({ type: LOADING_ERROR, payload: message });
  }
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
