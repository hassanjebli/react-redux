import { COUNTER_ACTIONS } from '../actions/types';

export const counterReducer = (state = { counter: 0 }, { type, payload }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return {
        counter: state.counter + payload.value,
      };
    case COUNTER_ACTIONS.DECREMENT:
      return {
        counter:
          state.counter > 0 && state.counter - payload.value >= 0
            ? state.counter - payload.value
            : state.counter,
      };

    default:
      return state;
  }
};
