export default ({ dispatch }) => next => action => {
  // check if action has promise on itself
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
