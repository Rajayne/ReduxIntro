const INITIAL_STATE = { count: 0 };

function countReducer(state = INITIAL_STATE, action) {
  // no way to update state yet,
  // let's just return it.
  return state;
}

const store = Redux.createStore(countReducer);
