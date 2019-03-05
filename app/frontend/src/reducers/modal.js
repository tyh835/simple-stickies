import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types';

const initialState = {
  showModal: false,
  noteId: null,
  modalType: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        modalType: ''
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalType: payload.modalType,
        noteId: payload.noteId || null
      };
    default:
      return state;
  }
};
