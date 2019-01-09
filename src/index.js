
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

import TodoListContainerSaga from './TodoListContainerSaga';

ReactDOM.render(<TodoListContainerSaga />, document.getElementById('root'));