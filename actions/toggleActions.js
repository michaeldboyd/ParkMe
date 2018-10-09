const actions = {};

actions.SET_TOGGLE_STATUS = "SET_TOGGLE_STATUS";
actions.setToggleStatus = payload => ({
  type: actions.SET_TOGGLE_STATUS,
  payload
});

export default actions;
