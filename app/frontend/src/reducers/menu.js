import { TOGGLE_MENU } from '../actionTypes';

const initialState = {
  showMenu: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    default:
      return state;
  }
};
