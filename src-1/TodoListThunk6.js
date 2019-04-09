
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
// import axios 
import axios from 'axios';
// import state from store
import store from './store';
import { 
	inputClickAction,
	inputChangeAction,
	addItemAction,
	delItemAction,
	getThunkListAction } from './store/actionCreators';
import TodoListUI5 from './TodoListUI5';

class TodoListThunk6 extends Component {

	constructor(props) {
		super(props);
		
		// get state
		this.state = store.getState();

		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnAdd = this.handleBtnAdd.bind(this);
		this.handleItemDel = this.handleItemDel.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);

		// component subscribe store, which means get the new state
		store.subscribe(this.handleStoreChange);

	}

	render() {
		return(
			<Fragment>
		    <TodoListUI5 
		    	inputValue={this.state.inputValue}
		    	list={this.state.list}
		    	handleInputClick={this.handleInputChange}
		    	handleInputChange={this.handleInputChange}
		    	handleBtnAdd={this.handleBtnAdd}
		    	handleItemDel={this.handleItemDel} />
			</Fragment>
		)
	}

	componentDidMount() {
		// this is an new asynchronous method, 
		// and can be executed in 'actionCreators.js',
		// because of 'redux-thunk'
		const action = getThunkListAction();
		store.dispatch(action);
	}

	handleInputClick() {
		//create action in 'actionCreators.js'
		const action = inputClickAction('');
		// dispatch action to reducer through store
		store.dispatch(action);
	}

	handleInputChange(e) {
		
		const action = inputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleBtnAdd() {
		
		const action = addItemAction();
		store.dispatch(action);
	}

	handleItemDel(index) {
		console.log('index', index);
		
		const action = delItemAction(index);
		store.dispatch(action);
	}

	// component state get the renewed state from store
	handleStoreChange() {
		this.setState(store.getState());
	}
}

export default TodoListThunk6;






















