import { combineReducers } from 'redux';
import async from './async';
import auth from './auth';
import menu from './menu';
import modal from './modal';
import notes from './notes';

export default combineReducers({
  async,
  auth,
  menu,
  modal,
  notes
});
