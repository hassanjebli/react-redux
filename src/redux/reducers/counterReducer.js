import { ACTIONS } from '../actions/types';

export const counterReducer = (state = { counter: 0 }, { type, payload }) => {
  switch (type) {
    case ACTIONS.INCREMENT:
      return {
        counter: state.counter + payload.value,
      };
    case ACTIONS.DECREMENT:
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
