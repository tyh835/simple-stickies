import { combineReducers } from 'redux';
import async from './async';
import menu from './menu';
import modal from './modal';
import notes from './notes';

export default combineReducers({
  async,
  menu,
  modal,
  notes
});
