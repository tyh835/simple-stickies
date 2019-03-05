import { CLOSE_MODAL, OPEN_MODAL } from './types';
import {
  EDIT_NOTE_MODAL,
  LOGIN_MODAL,
  POST_NOTE_MODAL,
  REGISTRATION_MODAL
} from '../components/modals/types';

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openEditNoteModal = noteId => ({
  type: OPEN_MODAL,
  payload: {
    modalType: EDIT_NOTE_MODAL,
    noteId
  }
});

export const openLoginModal = () => ({
  type: OPEN_MODAL,
  payload: {
    modalType: LOGIN_MODAL
  }
});

export const openPostNoteModal = () => ({
  type: OPEN_MODAL,
  payload: {
    modalType: POST_NOTE_MODAL
  }
});

export const openRegistrationModal = () => ({
  type: OPEN_MODAL,
  payload: {
    modalType: REGISTRATION_MODAL
  }
});
