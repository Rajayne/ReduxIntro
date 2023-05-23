# Redux Intro

Include html scripts or npm install redux.
const store = Redux.createStore();

## Store

Must pass in a reducer in createStore();

### Reducer

Reducer should be pure functions (should not mutate inputs)

Methods that mutate:

- push/pop
- shift/unshift
- splice
- modifying keys in object/array

Methods that do not mutate:

- map
- filter
- spread/Object.assign
- concat
- slice

### Reducer Function

Reducer accepts a **state** object and an **action** object

- The action is used to return a new state object
- Cannot create a store without specifiying initial state.
- Return store with store.getState()
