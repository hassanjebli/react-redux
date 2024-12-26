import { ACTIONS } from './types';

export const increment = (value) => ({
  type: ACTIONS.INCREMENT,
  payload: { value },
});
export const decrement = (value) => ({
  type: ACTIONS.DECREMENT,
  payload: { value },
});
