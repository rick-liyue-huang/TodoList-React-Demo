
/*
	3rd edition: talk about life-cycle methods in this demo.
*/

/*
	life-cycle methods execute processes:
	1. when the page firstly render:
		constructor - list
		componentWillMount - list
		render - list
		componentDidMount - list

	2. when click 'input'
		componentWillUpdate - list
		render - list
		componentDidUpdate - list

	3. when click 'button'
		componentWillUpdate - list
		render - list
		constructor - item
		componentWillMount - item
		render - item
		componentDidMount - item
		componentDidUpdate - list

	4.when click 'input' again
		componentWillUpdate - list
		render - list
		componentWillReceiveProps - item
		shouldComponentUpdate - item
		componentDidUpdate - list

	5. when click 'button' again
		componentWillUpdate - list
		render - list
		componentWillReceiveProps - item
		shouldComponentUpdate - item
		constructor - item
		componentWillMount - item
		render - item
		componentDidMount - item
		componentDidUpdate - list

	6. when click item to delete
		componentWillUpdate - list
		render - list
		componentWillUnmount - item
		componentDidUpdate - list
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		console.log('constructor - item');
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		console.log('render - item');
		const { content, test } = this.props;
		return (
			<div onClick={this.handleClick} >{content} - {test}</div>
		)
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps ----- item');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate -- item');
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
	}

	componentWillMount() {
		console.log('componentWillMount - item');
	}

	componentDidMount() {
		console.log('componentDidMount - item');
	}

	componentWillUpdate() {
		console.log('componentWillUpdate - item');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate - item');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount - item');
	}

	handleClick() {
		const { index, deleteItem } = this.props;
		deleteItem(index);
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

TodoItem.defaultProps = {
	test: 'hello React.js'
}

export default TodoItem;





















