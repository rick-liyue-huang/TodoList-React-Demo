
/*
	8nd edition: import redux-saga middleware

	1. 首先创建文件的时候，在store/index里面引入和使用redux-saga
	2. 创建sagas.js， 然后在store/index里面运行这个sagas.js文件 
	3. 在sagas.js里面有generator 函数，这个函数是当找到对应
	的action.type 类型，会运行对应的方法。
	4. 这个方法也是generator方法，可以运行异步操作，然后通过put发送给reducer,
	5. 在reducer.js里面,通过对应的方法类型来执行对应的方法。
	6. 因此， saga 主要是用来将action单独抽取出来放到单独的文件来执行。
	7. 对比thunk，只是允许action 可以返回函数。
*/


import React, { Component, Fragment } from 'react';
import store from './store';
import { getInputChangeAction, getItemSubmitAction, getItemDeleteAction, initListAction, getListSagaAction } from './store/actionCreators';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoListContainerSaga extends Component {

	constructor(props) {
		super(props);

		// console.log(store.getState());
		this.state = store.getState();
		console.log(this.state);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnSubmit = this.handleBtnSubmit.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return (
			<TodoListUI 
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleBtnSubmit={this.handleBtnSubmit}
				handleItemDelete={this.handleItemDelete} />
		)
	}

	componentDidMount() {
		/*axios.get('/api/list')
			.then((res) => {
				// console.log(res.data);
				const data = res.data;
				const action = initListAction(data);
				console.log(action);
				store.dispatch(action);
			})
			.catch(() => {});*/
		const action = getListSagaAction();
		store.dispatch(action);
	}

	handleInputChange(e) {
		// console.log(e.target.value);

		// create action
		/*const action = {
			type: CHANGE_INPUT_VALUE,
			value: e.target.value
		};*/
		const action = getInputChangeAction(e.target.value);

		store.dispatch(action);
	}

	handleBtnSubmit() {

		/*const action = {
			type: SUBMIT_TODO_ITEM
		};*/
		const action = getItemSubmitAction();

		// dispatch the action to 'sagas.js'
		store.dispatch(action);
	}

	handleItemDelete(index) {
		// console.log(index);
		/*const action = {
			type: DELETE_TODO_ITEM,
			index
		};*/
		console.log(index);
		const action = getItemDeleteAction(index);

		store.dispatch(action);
	}



	handleStoreChange() {
		// console.log('store changed');
		this.setState(store.getState());
	}
}

export default TodoListContainerSaga;







