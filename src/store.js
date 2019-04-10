
import { createStore } from 'redux';
import { 
  inputClickAction, 
  inputChangeAction,
  addTodoAction,
  toggleTodoAction,
  setFilterAction
 } from './actions';
import reducer from './reducers';

const store = createStore(reducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(inputClickAction(''));
store.dispatch(inputChangeAction('js'));
store.dispatch(addTodoAction('good'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('completed'));

unsubscribe();