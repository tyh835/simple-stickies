// Import Actions
import { dismissError } from './async';
import {
  loadUser,
  login,
  updateLoginForm,
  updateRegistrationForm
} from './auth';
import { toggleMenu } from './menu';
import {
  closeModal,
  openEditNoteModal,
  openLoginModal,
  openPostNoteModal,
  openRegistrationModal
} from './modals';
import {
  deleteNote,
  fetchNotes,
  moveNote,
  postNote,
  saveNotes,
  updateNote,
  updateNewNote
} from './notes';

// Export Actions
export { dismissError };
export { loadUser, login, updateLoginForm, updateRegistrationForm };
export { toggleMenu };
export {
  closeModal,
  openEditNoteModal,
  openLoginModal,
  openPostNoteModal,
  openRegistrationModal
};
export {
  deleteNote,
  fetchNotes,
  moveNote,
  postNote,
  saveNotes,
  updateNote,
  updateNewNote
};
