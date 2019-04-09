
/*

	2nd edition: this is parent component

	and know that state will transfer to TodoItem2 by 'props'
 */

import React, { Component, Fragment } from 'react';
// all in js: js file can import .css file.
import './style.css';
import TodoItem2 from './TodoItem2';

class TodoList extends Component {

	constructor(props) {
		console.log('constructor -- list');
		super(props);

		this.state = {
			inputValue: 'please',
			list: []
		};

		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnAdd = this.handleBtnAdd.bind(this);
		this.handleItemDel = this.handleItemDel.bind(this);
	}

	render() {
		console.log('render -- list');
		return (
			<Fragment>
				<div>
					<label htmlFor='insert' >Input Content </label>
					<input 
					 	id='insert'
					 	className='input'
					 	ref={(input) => {this.input = input}}
					 	value={this.state.inputValue}
					 	onClick={this.handleInputClick}
					 	onChange={this.handleInputChange}	/>
					<button onClick={this.handleBtnAdd} >Submit</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}} >
					{
						this.getList()
					}
				</ul>
			</Fragment>
		)
	}

	componentWillMount() {
		console.log('componentWillMount -- list');
	}

	componentDidMount() {
		console.log('componentDidMount -- list');
	}

	componentWillUpdate() {
		console.log('componentWillUpdate -- list');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate -- list');
	}

	getList() {
		return this.state.list.map((item, index) => {
			return (
				<Fragment key={item}>
					{/*
						here, 'content', 'index', 'deleteItem' are states
						 that will transfer to 'TodoItem2', and TodoItem2 will get them
						 by 'this.props...'.
					*/}
					<TodoItem2 
						key={item}
						content={item}
						index={index}
						deleteItem={this.handleItemDel} />
				</Fragment>
			)
		});
	}

	handleInputClick() {
		// the event used to modify state.
		this.setState(() => ({
			inputValue: ''
		}));
	}

	handleInputChange(e) { 
		/*
			1. 'this.setState' method is asynchronous one, 
			so need to confirm the value before the method executes.
			2. we also can use 'ref={(input) => {this.input = input}}' to confirm the component and get its value.
		 */
		const value = e.target.value;
		// const value = this.input.value;
		this.setState(() => ({
			inputValue: value
		}));
	}

	handleBtnAdd() {
		/*
			1. here prevState is the previous state,
			we also can use '...this.state.list';
			2. setState(() => {}, () => {}) method can execute asynchronous one.
		 */
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}), () => {
			console.log('TodoItem length', this.ul.querySelectorAll('div').length);
		});
	}

	handleItemDel(index) {
		console.log('index', index);
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return { list }
		});
	}
}

export default TodoList;
































