

// create store and import reducer
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import TodoSagas from './sagas';

/*
	install 'thunk' and 'saga' in store/index.js
*/

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose;

/*const enhancer = composeEnhancers(
  applyMiddleware(thunk));*/
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware));


const store = createStore(reducer, enhancer);
sagaMiddleware.run(TodoSagas);

export default store;









