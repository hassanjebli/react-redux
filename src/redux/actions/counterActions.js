import { COUNTER_ACTIONS } from './types';

export const increment = (value) => ({
  type: COUNTER_ACTIONS.INCREMENT,
  payload: { value },
});
export const decrement = (value) => ({
  type: COUNTER_ACTIONS.DECREMENT,
  payload: { value },
});
