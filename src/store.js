
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// import logger middleware
import loggerMiddleware from './middlewares/logger';
// import logger enhancer composer
import loggerEnhancer from './enhancers/logger';

// import { clickInputAction, changeInputAction, addTodoAction, toggleTodoAction, setFilterAction } from './actions';
// const store = createStore(reducer);

/*
// see store new state information after action
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(clickInputAction(''));
store.dispatch(changeInputAction('good'));
store.dispatch(addTodoAction('haha'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('active'));

unsubscribe();

*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  // applyMiddleware(thunk, loggerMiddleware)
  applyMiddleware(thunk), loggerEnhancer
));
export default store;