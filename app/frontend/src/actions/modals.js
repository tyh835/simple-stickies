import { CLOSE_MODAL, OPEN_MODAL } from '../actionTypes';

// Export constants representing modal type
export const POST_NOTE_MODAL = 'POST_NOTE_MODAL';
export const EDIT_NOTE_MODAL = 'EDIT_NOTE_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openPostNoteModal = () => ({
  type: OPEN_MODAL,
  payload: {
    modalType: POST_NOTE_MODAL
  }
});

export const openEditNoteModal = noteId => ({
  type: OPEN_MODAL,
  payload: {
    modalType: EDIT_NOTE_MODAL,
    noteId
  }
});
