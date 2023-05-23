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

### Function

Reducer accepts a **state** object and an **action** object

- The action is used to return a new state object
- Cannot create a store without specifiying initial state.
- Return store with store.getState()

### Actions

Never called directly, it is intercepted and processed by a reducer.

- Actions are instructions that tell reducers how to adjust state.
- Objects that contain a `type` key, which is conventionally UPPER_SNAKE_CASE strings.
- Run `dispatch` on store to enact action.
- Can include additional keys besides type like `payload`.

> _store.dispatch()_ without passing in an action or object with key of _type_ will return an error.
