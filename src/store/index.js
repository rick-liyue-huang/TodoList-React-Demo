
// create store to deal with redux
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

// import 'redux-thunk'
import thunk from 'redux-thunk';
// import 'redux-saga'
import createSagaMiddleware from 'redux-saga';
import TodoListSaga from './sagas';

/*const store = createStore(
	reducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(TodoListSaga);

export default store;

















