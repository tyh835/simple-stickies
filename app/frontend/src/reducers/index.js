import { combineReducers } from 'redux';
import loading from './loading';
import menu from './menu';
import modal from './modal';
import notes from './notes';
import save from './save';

export default combineReducers({
  loading,
  menu,
  modal,
  notes,
  save
});
