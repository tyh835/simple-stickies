// Import Actions
import { dismissError } from './async';
import {
  loadUser,
  login,
  logout,
  register,
  updateLoginForm,
  updateRegistrationForm
} from './auth';
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
  updateNoteColor,
  updateNewNote,
  updateNewNoteColor
} from './notes';

// Export Actions
export { dismissError };
export {
  loadUser,
  login,
  logout,
  register,
  updateLoginForm,
  updateRegistrationForm
};
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
  updateNoteColor,
  updateNewNote,
  updateNewNoteColor
};
