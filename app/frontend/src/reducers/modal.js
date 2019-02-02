import { CLOSE_MODAL, OPEN_MODAL } from '../actionTypes';

const initialState = {
  showModal: false,
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
        modalType: payload
      };
    default:
      return state;
  }
};
