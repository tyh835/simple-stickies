import { combineReducers } from 'redux';
import loading from './loading';
import notes from './notes';

export default combineReducers({
  loading,
  notes
});
