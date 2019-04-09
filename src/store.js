
import { createStore } from 'redux';
import rootReducer from './reducer';
import { addTodoAction, toggleTodoAction, setFilter, setTodoText } from './actions';

const store = createStore(rootReducer);

// initiate state
console.log(store.getState());

// subscibe  state change
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodoAction('js'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('good'));

// cancel subscribe
unsubscribe();
