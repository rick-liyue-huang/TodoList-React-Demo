
/*
	this is child component --- TodoItem2 component
	this component will get state by 'this.props' from 'TodoList2' component.

	here, 'content', 'index', 'deleteItem' are props from its parent component.
 */
import React, { Component } from 'react';
// set props types 
import PropTypes from 'prop-types';

class TodoItem2 extends Component {

	constructor(props) {
		console.log('constructor -- item');
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		console.log('render -- item');
		// also can be written as 'this.props.content'
		// here test are nothing but set in defaultProps
		const { content, test } = this.props;
		return (
			<div onClick={this.handleClick}	>{content} - {test}</div>
		)
	}

	componentWiiMount() {
		console.log('componentWillMount -- item');
	}

	componentDidMount() {
		console.log('componentDidMount -- item');
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps --- item');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate -- item');
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
	}

	componentWillUpdate() {
		console.log('componentWillUpdate -- item');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate -- item');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount -- item');
	}

	// if we transfer the state to its parent component, it needs to
	// trigger its parent methods 'deleteItem(index)',
	// thus in the parent component will trigger 'handleItemDel(index)' method.
	handleClick() {
		const { index, deleteItem } = this.props;
		deleteItem(index);
	}
}

/*
	when child component receive the props from parent one, 
	we can set props type and also set default value.
 */
TodoItem2.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	index: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
	deleteItem: PropTypes.func,
	test: PropTypes.string
};

TodoItem2.defaultProps = {
	test: 'hello React.js'
};

export default TodoItem2;














