

// define the middleware
export default ({getState, dispatch}) => next => action => {
  console.group(action.type);
  console.log('dispatching: ', action);
  const result = next(action);
  console.log('next state: ', getState());
  console.groupEnd();
  return result;
}