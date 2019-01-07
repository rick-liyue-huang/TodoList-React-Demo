
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
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

	render() {
		const { content, test } = this.props;
		return(
			<div onClick={this.handleClick} >{content} - {test}</div>
		)
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













