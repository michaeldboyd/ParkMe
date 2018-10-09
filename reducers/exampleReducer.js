import ACTION_NAMES from "../actions/exampleActions";

// every reducer gets to define its own initial piece
// of state. All these pieces of state together make
// up the single source of truth for the store.
const initialState = {
  // remember these properties from the action file?
  // they keep track of the async action's progress.
  xPending: false, // will be true while the action is in progress
  xSuccessful: false, // will be true when the action is done
  xError: null, // will be an Error if the action fails,
  otherStuff: {
    canBe: "anything"
  }
};

const actionHandlers = {
  // each action needs to have a matching handler.
  // yep, more boilerplate. but it's ok.

  // these handlers are the heart of the reducer.
  // a reducer takes in (old state, action) and uses
  // that to construct and return a new state.
  // All one reducer needs to know is what to do
  // to the state, with its action.

  // This reducer doesn't need the action, since it
  // always does the same thing and didn't require
  // a payload when called.
  [ACTION_NAMES.X_START]: state => ({
    ...state,
    xPending: true
  }),
  [ACTION_NAMES.X_SUCCESSFUL]: state => ({
    ...state,
    xSuccessful: true
  }),

  // It's easy to access the action's payload.
  [ACTION_NAMES.X_FAILURE]: (state, action) => ({
    ...state,
    xError: action.payload
  }),

  // You can even destructure the payload right
  // out of the action.
  [ACTION_NAMES.SET_OTHER_STUFF]: (state, { payload }) => ({
    ...state,
    otherStuff: payload
  })
};

// These handlers define what this reducer does with the
// state that it's concerned. On every action, the state
// and the action will be given to every single reducer
// so that it can assess what to do with it.

// This means that the main reducer must either handle the
// action and return a new state, or pass the state through
// unchanged, effectively dismissing it.

// The first time all reducers are called, at the app's
// initialization, the state is undefined. this is where the
// initialState comes in.
export default (state = initialState, action) => {
  return actionHandlers[action.type]
    ? actionHandlers[action.type](state, action)
    : state;
};
