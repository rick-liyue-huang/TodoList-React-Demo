
import { createStore } from 'redux';
import rootReducer from './reducers';
import { addTodoAction, toggleTodoAction, setFilterAction, setTodoTextAction } from './actions';

const store = createStore(rootReducer);

console.log(store.getState());

// subscribe state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

// trigger actions
store.dispatch(addTodoAction('lenarn react.js'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('active'));
store.dispatch(setTodoTextAction('modify node.js'));
// unsubscribe
unsubscribe()