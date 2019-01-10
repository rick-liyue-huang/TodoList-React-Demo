
/*
	4th edition: talk about React-Transition-Group
	using CSSTransition and TransitionGroup	
*/

import React, { Component, Fragment } from 'react';
import './style.css';
import  { CSSTransition, TransitionGroup } from 'react-transition-group';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// show: true
			list: []
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	render() {
		return (
			<Fragment>
				{/*<div className={this.state.show ? 'show' : 'hide'} >hellohello</div>*/}
				{/*<CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames='fade'
					unmountOnExit
					onEnter={(el) => {el.style.color='red'}}
					onEntering={(el) => {el.style.color='blue'}}
					onEntered={(el) => {el.style.color='green'}}
					appear={true}
				>
					<div>hellohellohello</div>
				</CSSTransition>
				<button onClick={this.handleClick} >Toggle</button>*/}
				
				<TransitionGroup>
				{
					this.state.list.map((item, index) => {
						return (
							<CSSTransition
								key={index}
								in={this.state.show}
								timeout={1000}
								classNames='fade'
								unmountOnExit
								onEnter={(el) => {el.style.color='red'}}
								onEntering={(el) => {el.style.color='blue'}}
								onEntered={(el) => {el.style.color='green'}}
								appear={true}
							>
								<div>{item}</div>
							</CSSTransition>
						)
					})
				}
				</TransitionGroup>
				<button onClick={this.handleAdd} >Add</button>
			</Fragment>
		)
	}

	handleClick() {
		this.setState(() => ({
			show: this.state.show ? false : true
		}));
	}

	handleAdd() {
		this.setState((prevState) => {
			return {
				list: [...prevState.list, 'item']
			}
		});
	}
}

export default App;












