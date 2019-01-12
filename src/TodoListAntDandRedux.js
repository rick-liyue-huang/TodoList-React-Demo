

/*
	5th edition: ant design introduced and Redux

	dispatch(action)    (previousState, action)
	action Creators -> Store -><- Reducers
				 /|\		state \|/    newState
					|------React Component

*/

/*
	redux principles:
	1. store is the solo;
	2. only store can modify itself content (state), but NOT reducer
	3. Reducer must be pure function(have given output based on the given input, NO settimeout, ajax, and date(), and no vice-effects );

	core APIs:
	createStore -> produce stroe
	store.dispatch -> component dispatch action
	store.getState -> component get store data
	store.subscribe -> component modify state
*/

import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getItemSubmitAction, getItemDeleteAction } from './store/actionCreators';
import 'antd/dist/antd.css';

class TodoListAntDesign extends Component {

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
			<Fragment>
				<div style={{marginTop: '10px', marginLeft: '10px'}}>
					<Input 
						placeholder='pls'
						value={this.state.inputValue}
						style={{width: '300px', marginRight: '10px'}}
						onChange={this.handleInputChange} />

					<Button 
						type='primary'
						onClick={this.handleBtnSubmit} >Submit</Button>
				</div>
				<List style={{width: '300px', marginTop: '10px', marginLeft: '10px'}}
		      bordered
		      dataSource={this.state.list}
		      renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)} >{item}</List.Item>)}
		    />
			</Fragment>
		)
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

		store.dispatch(action);
	}

	handleItemDelete(index) {
		// console.log(index);
		/*const action = {
			type: DELETE_TODO_ITEM,
			index
		};*/
		const action = getItemDeleteAction(index);

		store.dispatch(action);
	}



	handleStoreChange() {
		// console.log('store changed');
		this.setState(store.getState());
	}
}

export default TodoListAntDesign;







