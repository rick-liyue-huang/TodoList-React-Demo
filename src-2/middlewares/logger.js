
// middleware print log
const logger = ({getState, dispatch}) => next => action => {
  console.group(action.type);
  console.log('dispatching: ', action);
  const result = next(action);
  console.log('new state: ', getState());
  console.groupEnd();
  return result;
}

export default logger;