
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
						ref={(input) => {this.input = input}}
						id='insert'
						className='input'
						value={this.state.inputValue}
						onClick={this.handleInputClick}
						onChange={this.handleInputChange}
						 />
					<button onClick={this.handleBtnSubmit} >Submit</button>
				</div>
				<ul ref={(ul) => {this.ul = ul}} >
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
		// console.log(e.target);
		// const value = e.target.value;
		const value = this.input.value;
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
		}), () => {
			// after successful asyn
			console.log(this.ul.querySelectorAll('div').length);
		});

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

/*
	when component state or props changes the render will execute.

	state data
	JSX template
	state + template get the virtual DOM
	and then use vDOM to produce true DOM
	virtual DOM is the JS object
	<div id='abc'><span>hello</span></div>
	['div', {id:'abc'}, ['span', {}, 'hello']]
	state change
	get the modified virtual DOM
	compare the original vDOM and new vDOM,and get the difference,
	control true DOM
*/

/*
	JSX -> JS object -> true DOM
	return React.createElement('div', {}, 'item')
	==> return <div>item</div>
	return React.createElement('div', {}, React.createElement('span', {}, 'item'))
	==> return <div><span>item</span></div>

	merits:
	1.optimization
	2. vDOM can be used in original APP, RN

	vDOM diff algorithm: how to compare two vDOMs:
	setState manytimes only trigger one time differ algorithm;
	if the parent dom level diffs, will discard all children dom levels;
	the vDom 'li' list should with key={item}

*/

/*
	ref: ref={(ul) => {this.ul = ul}}
	setState( () => {}, () => {ref...})

 */




















