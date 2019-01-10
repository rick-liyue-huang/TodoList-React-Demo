
// for JSX
import React from 'react';
import ReactDOM from 'react-dom';
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













