
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
// import { clickInputAction, changeInputAction, addTodoActioin, toggleTodoAction, setFilterAction } from './actions';

// import selfdefined logger middleware
import loggerMiddleware from './middlewares/logger';

// import selfdefined logger enhancer store
import loggerEnhancer from './enhancers/logger';
import { apply } from 'redux-saga/effects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  /*applyMiddleware(thunk, loggerMiddleware) */
  applyMiddleware(thunk), loggerEnhancer
));


// const store = createStore(reducer);

/*
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(clickInputAction(''));
store.dispatch(changeInputAction('good'));
store.dispatch(addTodoActioin('haha'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('active'));

unsubscribe();

*/

export default store;