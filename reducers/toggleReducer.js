import ACTION_NAMES from "../actions/toggleActions";

const initialState = {
  isToggled: false
};

const actionHandlers = {
  [ACTION_NAMES.SET_TOGGLE_STATUS]: (state, action) => ({
    ...state,
    isToggled: action.payload
  })
};

export default (state = initialState, action) => {
  return actionHandlers[action.type]
    ? actionHandlers[action.type](state, action)
    : state;
};
