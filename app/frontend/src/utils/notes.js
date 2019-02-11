import { AUTH_ERROR, LOADING_ERROR } from '../actionTypes';

export const getLayerStyle = (initialOffset, currentOffset) => {
  const layerStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0
  };

  if (!initialOffset || !currentOffset) {
    return {
      ...layerStyle,
      display: 'none'
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    ...layerStyle,
    transform
  };
};

export const getNoteStyle = (note, isDragging) => {
  const { positionX, positionY } = note;
  const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

  return {
    position: 'absolute',
    transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
};

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
