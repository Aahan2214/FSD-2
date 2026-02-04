const initialState = {
  count1: 0,
  count2: 0
};

export function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_1":
      return { ...state, count1: state.count1 + 1 };
    case "DECREMENT_1":
      return { ...state, count1: state.count1 - 1 };
    case "INCREMENT_2":
      return { ...state, count2: state.count2 + 1 };
    case "DECREMENT_2":
      return { ...state, count2: state.count2 - 1 };
    default:
      return state;
  }
}