import { combineReducers } from 'redux';
import loading from './loading';
import menu from './menu';
import notes from './notes';

export default combineReducers({
  loading,
  menu,
  notes
});
