
/*

	1st edition: import only react.js. 

	Need to konow that one file is one component, 
	and 'this' points to this sole component in one file.
	So that's why we use '{this.event}' in the component, and e'vent.bind(this)'
 */
import React, { Component, Fragment } from 'react';
// all in js: js file can import .css file.
import './style.css';

class TodoList extends Component {

	constructor(props) {
		super(props);
		// some data stored in state
		this.state = {
			inputValue: 'please',
			list: ['EN', 'JS', 'React.js', 'Python']
		};

		// optimization: as 'constructor' method only execute once, so put 'bind' method here.
		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnAdd = this.handleBtnAdd.bind(this);
	}

	render() {
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
					{/* 

						state.list can be map and return li
						dangerouslySetInnerHTML={{__html: item}} can input tag style such
						<h1>title</h1> to show h1 style 'title'.	
					*/}
					{
						this.state.list.map((item, index) => {
							return (
								<li 
									key={item}
									dangerouslySetInnerHTML={{__html: item}}
									onClick={this.handleItemDel.bind(this, index)}	>{/*item*/}</li>
							)
						})
					}
				</ul>
			</Fragment>
		)
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
			console.log('li length', this.ul.querySelectorAll('li').length);
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
































