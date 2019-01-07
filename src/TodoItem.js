
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	// initialization
	constructor(props) {
		console.log('constructor - item');
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	/*render() {
		// es6
		const { content } = this.props;
		return (
			<div 
				dangerouslySetInnerHTML={{__html: content}}
				onClick={this.handleClick} ></div>
		)
	}*/

	// the component will mount on the page
	componentWillMount() {
		console.log('componentWillMount - item');
	}

	render() {
		console.log('render - item');
		const { content, test } = this.props;
		return(
			<div onClick={this.handleClick} >{content} - {test}</div>
		)
	}

	componentDidMount() {
		console.log('componentDidMount - item');
	}

	// when the component receive props from its parent one
	// and the parent component re-render func execute
	// 如果该组件之前已经存在，如果父组件render就执行，如果该组件第一次执行就不会执行。
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps -- item');
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.content !== this.props.content) {
			return true;
		} else {
			return false;
		}
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
		const { ItemDelete, index } = this.props;
		console.log(this.props.index);
		// this.props.ItemDelete(this.props.index);
		ItemDelete(index);
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deletItem: PropTypes.func,
	index: PropTypes.number 
};

TodoItem.defaultProps = {
	test: 'hello react'
};

export default TodoItem;













