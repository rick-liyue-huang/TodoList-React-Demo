
/*
	3rd edition: know about react-transition-group
	
 */

import React, { Component, Fragment } from 'react';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			list: []
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	render() {
		/*
			care about the CSSTransition parameters functions
		 */ 
		return (
			<Fragment>
				<CSSTransition
					in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          appear={true}
          onEntered={(el) => {
            el.style.color='orange';
          }}>
					<div className={this.state.show ? 'show' : 'hide'} >hellohellohello</div>
				</CSSTransition>
				<TransitionGroup>
					{
						this.state.list.map((item, index) => {
							return (
								<CSSTransition
				          timeout={1000}
				          classNames="fade"
				          unmountOnExit
				          appear={true} >
									<div onClick={this.handleDel.bind(this, index)} >{item}</div>
								</CSSTransition>
							)
						})
					}
				</TransitionGroup>
				<button onClick={this.handleToggle} >Toggle</button>
				<button onClick={this.handleAdd} >Add</button>
			</Fragment>
		)
	}

	handleToggle() {
		this.setState((prevState) => ({
			show: prevState.show ? false : true
		}));
	}

	handleAdd() {
		this.setState((prevState) => ({
			list: [...prevState.list, 'item']
		}));
	}

	handleDel(index) {
		console.log(index);
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return { list }
		});
	}
}

export default App3;














