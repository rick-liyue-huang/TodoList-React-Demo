/*
	7nd edition: use redux-thunk middleware
*/


import React, { Component, Fragment } from 'react';
import store from './store';
import { getInputChangeAction, getItemSubmitAction, getItemDeleteAction, initListAction, getTodoList } from './store/actionCreators';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoListContainer extends Component {

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
		/*axios.get('/api/todolist')
			.then((res) => {
				// console.log(res.data);
				const data = res.data;
				const action = initListAction(data);
				console.log(action);
				store.dispatch(action);
			})
			.catch(() => {});*/

			const action = getTodoList();
			console.log(action);
			store.dispatch(action);
	}

	handleInputChange(e) {
		
		const action = getInputChangeAction(e.target.value);

		store.dispatch(action);
	}

	handleBtnSubmit() {

		const action = getItemSubmitAction();

		store.dispatch(action);
	}

	handleItemDelete(index) {
		
		console.log(index);
		const action = getItemDeleteAction(index);

		store.dispatch(action);
	}



	handleStoreChange() {
		// console.log('store changed');
		this.setState(store.getState());
	}
}

export default TodoListContainer;


