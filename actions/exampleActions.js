const actions = {};

// There are many ways of defining actions and their types,
// so for our purposes we will use this. Every action needs
// a type, which is defined right before the action as a
// constant.

// Actions are functions that take a payload and return an
// object that returns that same payload and a type.

// The purpose of an action is to tell the reducer what to
// do with the state that it's given.

// Actions are also
// the only way that the state is mutated and the only
// part of redux that's directly called by outside code.

// Actions are called only with `dispatch`, a redux function.

// Actions are usually synchronous, in which case they
// are just a normal function that uses an object.

actions.DO_EXAMPLE_SYNC_ACTION = "DO_EXAMPLE_SYNC_ACTION";
actions.doExampleSyncAction = () => ({
  type: actions.DO_EXAMPLE_SYNC_ACTION
});

// Asynchronous actions are called "thunks", are functions
// that return normal actions. (Thunk is the past tense of think)

// The outer function receives
// the payload as normal, but the inner function gets
// passed `dispatch`, and `getState`. In this way, the thunk
// may dispatch other actions, as asynchronous events occur.

actions.DO_EXAMPLE_ASYNC_ACTION = "DO_EXAMPLE_ASYNC_ACTION";
actions.doExampleAsyncAction = payload => async dispatch => {
  // this is a mock of axios, which we will use to talk to
  // the api. Its methods are async and return promises.
  const axiosMock = {
    post: async () => Promise.resolve({ data: { hello: "world" } })
  };

  // a common practice is to let the state keep track of async
  // action `x` with 3 properties - `xPending` (boolean),
  // `xSuccessful` (boolean), and `xError` (an Error).

  // This part of the state can be changed with 3 actions,
  // `xStart`, `xSuccessful`, and `xFailure`, which are
  // defined below.

  dispatch(actions.xStart());
  axiosMock
    .post()
    .then(response => dispatch(actions.xSuccessful()))
    .catch(error => dispatch(actions.xFailure(error)));
};

// These 3 actions have only one job - to track the results
// of the async thunk above. Yes, this is a bunch of boilerplate
// and yes there are better ways. But this is a good way
// to always konw what actions belong with what.

// Not all actions have to have a payload. This action will always
// change the state in the same way.

actions.X_START = "X_START";
actions.xStart = () => ({
  type: actions.X_START
});

actions.X_SUCCESSFUL = "X_SUCCESSFUL";
actions.xSuccessful = () => ({
  type: actions.X_SUCCESSFUL
});

actions.X_FAILURE = "X_FAILURE";
actions.xFailure = payload => ({
  type: actions.X_FAILURE,
  payload
});

actions.SET_OTHER_STUFF = "SET_OTHER_STUFF";
actions.setOtherStuff = payload => ({
  type: actions.SET_OTHER_STUFF,
  payload
});

export default actions;
