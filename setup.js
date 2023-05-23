const INITIAL_STATE = { count: 0 };

function countReducer(state = INITIAL_STATE, action) {
  if (action.type === "LOG_STATE") {
    console.log("STATE", state);
  }
  // If action not matched
  return state;
}

const store = Redux.createStore(countReducer);
