
<<<<<<< HEAD
import { CreateStore } from 'redux';
import reducer './reducer';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;



=======
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
