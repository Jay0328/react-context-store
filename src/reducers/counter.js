import { PLUS } from '../actions/counter';

const initialState = {
  count: 0
};

const Counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { ...state, count: state.count + action.num };
    default:
      return state;
  }
};

export default Counter;
