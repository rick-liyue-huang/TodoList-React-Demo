

// create store and import reducer
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/*
	install 'thunk' in store/index.js
*/

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;









