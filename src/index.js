
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import store from './store';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from './middlewares/logger';
import loggerEnhancer from './enhancers/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk, logger)
//   ));
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk), loggerEnhancer
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));