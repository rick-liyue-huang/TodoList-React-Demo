
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './storeReactRedux';

/*
	1st edition: import TodoList1
 */
// import TodoList1 from './TodoList1';

/*
	2nd edition: import TodoList2
 */
// import TodoList2 from './TodoList2';

/*
	3rd editioin: App3.js to show react-transition-group use.
 */
// import App3 from './App3';

/*
	4th edition: import Antd and 
 */
// import TodoList4 from './TodoList4';

/*
	5th edition: 
	import axios to load data from server
	decompose to container and UI components and set UI to stateless component
 */
// import TodoListContainer5 from './TodoListContainer5';

/*
	6th edition:
	import 'redux-thunk' to deal with asynchronous method in actionCreators.js
 */
// import TodoListThunk6 from './TodoListThunk6';

/*
	7th edition:
	import 'redux-saga' to deal with asynchronous method in 'sagas.js' file.
 */
// import TodoListSaga7 from './TodoListSaga7';

// ReactDOM.render(<TodoListSaga7 />, document.getElementById('root'));

/*
	8th editon: import 'react-redux'
 */
import TodoListReactRedux8 from './TodoListReactRedux8';

const App = (
	<Provider store={store}>
		<TodoListReactRedux8 />
	</Provider>
);

RectDOM.render(App, document.getElementById('root'));








=======
// import TodoList from './TodoList';
// 2nd edition: import the component file
// import TodoListNew from './TodoListNew';
// import App from './App';
// import TodoListAntDandRedux from './TodoListAntDandRedux';
// import TodoListContainer from './TodoListContainer';
// import TodoListContainerThunk from './TodoListContainerThunk';
// import TodoListContainerSaga from './TodoListContainerSaga';


// special for react-redux
import { Provider } from 'react-redux'
import store from './storeReactRedux';
import ListReactRedux from './ListReactRedux';

// because App connect with 'store', so all its inside component can use store.
const App = (
	<Provider store={store} >
		<ListReactRedux />
	</Provider>
);

ReactDOM.render(App, document.getElementById('root'));
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0













