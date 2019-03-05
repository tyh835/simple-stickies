import { DISMISS_ERROR } from './types';

export const dismissError = key => ({
  type: DISMISS_ERROR,
  payload: key
});
