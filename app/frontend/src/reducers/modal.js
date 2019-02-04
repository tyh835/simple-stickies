import { CLOSE_MODAL, OPEN_MODAL } from '../actionTypes';

const initialState = {
  showModal: false,
  noteId: '',
  modalType: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalType: payload.modalType,
        noteId: payload.noteId || ''
      };
    default:
      return state;
  }
};
