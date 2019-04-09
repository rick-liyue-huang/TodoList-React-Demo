
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
// import state from store
import store from './store';
import { 
	inputClickAction,
	inputChangeAction,
	addItemAction,
	delItemAction } from './store/actionCreators';

class TodoList4 extends Component {

	constructor(props) {
		super(props);
		
		// get state
		this.state = store.getState();

		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnAdd = this.handleBtnAdd.bind(this);

		this.handleStoreChange = this.handleStoreChange.bind(this);
		// component subscribe store, which means get the new state
		store.subscribe(this.handleStoreChange);

	}

	render() {
		return(
			<Fragment>
				<div style={{marginTop: 10, marginLeft: 10}}>
					<label htmlFor='insert' >Input Content </label>
					<Input 
						id='insert'
						style={{width: '300px', marginRight: '10px'}}
						value={this.state.inputValue}
						onClick={this.handleInputClick}
						onChange={this.handleInputChange} />
					<Button 
						type='primary'
						onClick={this.handleBtnAdd} >Submit</Button>
				</div>
				<List
					style={{width: '399px', marginTop: 10}}
		      bordered
		      dataSource={this.state.list}
		      renderItem={(item, index) => (
		      	<List.Item onClick={this.handleItemDel.bind(this, index)} >{item}</List.Item>)}
		    />
			</Fragment>
		)
	}

	handleInputClick() {
		//1, create action, which is object containing type, and maybe value
		/* const action = {
			type: 'input_click',
			value: ''
		};*/
		//2, create action in 'actionCreators.js'
		const action = inputClickAction('');
		// dispatch action to reducer through store
		store.dispatch(action);
	}

	handleInputChange(e) {
		/*const action = {
			type: 'input_change',
			value: e.target.value
		};*/
		const action = inputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleBtnAdd() {
		/*const action = {
			type: 'add_item'
		};*/
		const action = addItemAction();
		store.dispatch(action);
	}

	handleItemDel(index) {
		console.log('index', index);
		/*const action = {
			type: 'del_item',
			index
		};*/
		const action = delItemAction(index);
		store.dispatch(action);
	}

	// component state get the renewed state from store
	handleStoreChange() {
		this.setState(store.getState());
	}
}

export default TodoList4;






















