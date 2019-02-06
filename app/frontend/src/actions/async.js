import { DISMISS_ERROR } from '../actionTypes';

export const dismissError = key => ({
  type: DISMISS_ERROR,
  payload: key
});
