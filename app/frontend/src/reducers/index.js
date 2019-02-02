import { combineReducers } from 'redux';
import loading from './loading';
import menu from './menu';
import modal from './modal';
import notes from './notes';

export default combineReducers({
  loading,
  menu,
  modal,
  notes
});
