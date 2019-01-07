
// the 2nd edition: import 'TodoItem' component to replace 'li'
// and optimize the code

/*
	parent component transfer data to children one by 'props'
	children component transfer data to parent one by 'event'
	react.js is the single-direction data flow;
	parent can transfer data to children, and child one cannot 
	change the data.
	react.js is the funtional programming, which is composed of many functions,
	and well done for unit test.

*/

import React, { Component, Fragment } from 'react';
// import the child component
import TodoItem from './TodoItem';

import './style.css';

class TodoListNew extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'pls',
			list: []
		};

		// bind 'this' on the initial stage
		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnSubmit = this.handleBtnSubmit.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor='insert'>Input Content </label>
					<input
						id='insert'
						className='input'
						value={this.state.inputValue}
						onClick={this.handleInputClick}
						onChange={this.handleInputChange}
						 />
					<button onClick={this.handleBtnSubmit} >Submit</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}

// code decompose
	getTodoItem() {
		return this.state.list.map( (item, index) => {
						return (
							<TodoItem
								key={item}
								content={item}
								index={index}
								ItemDelete={this.handleItemDelete} />
						)
						
					});
	}

	handleInputClick() {
		/*this.setState({
			inputValue: ''
		});*/
		/*this.setState( () => {
			return {
				inputValue: ''
			}
		});*/
		this.setState( () => ({
			inputValue: ''
		}));
	}

	handleInputChange(e) {
		/*this.setState({
			inputValue: e.target.value
		});*/
		const value = e.target.value;
		// asynchronous
		this.setState( () => ({
			inputValue: value
		}));
	}

	handleBtnSubmit() {
		/*this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});*/
		// prevState is the previous state
		this.setState( (prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	handleItemDelete(index) {
		/*const list = [...this.state.list];
			list.splice(index, 1);
			this.setState({
			list: list
		});*/
		this.setState( (prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		})
	}

}

export default TodoListNew;




















