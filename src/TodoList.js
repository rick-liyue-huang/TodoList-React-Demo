
import React, { Component, Fragment } from 'react';

import './style.css';

// one component is one class that combine the state data and template
class TodoList extends Component {

	// to build the state
	constructor(props) {
		super(props);

		// set the initial state
		this.state = {
			inputValue: 'pls',
			list: []
		};

		// optimize 
		this.handleInputClick = this.handleInputClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnSubmit = this.handleBtnSubmit.bind(this);

	}

	// to build the template
	// here 'this' means the component
	/*
		className -- class fro style name;
		dangerouslySetInnerHTML: set dom style <h1>ok</h1>;
		{{}} represent the object {}
	*/
	render() {
		return(
			<Fragment>
				<div>
					<label htmlFor='insert'>Input Content </label>
					<input
						id="insert" 
						value={this.state.inputValue}
						className='input'
						onClick={this.handleInputClick}
						onChange={this.handleInputChange} />
					<button onClick={this.handleBtnSubmit} >Submit</button>
				</div>
				<ul>
					{
						this.state.list.map( (item, index) => {
							return (<li 
								key={item}
								dangerouslySetInnerHTML={{__html: item}}
								onClick={this.handleItemDelete.bind(this, index)} ></li>)
						})
					}
				</ul>
			</Fragment>
		)
	}

	// bind event to control state
	handleInputClick() {
		this.setState({
			inputValue: ''
		});
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleBtnSubmit() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}

	handleItemDelete(index) {
		console.log(index);
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list
		});
	}



}

// export to index.js
export default TodoList;


















