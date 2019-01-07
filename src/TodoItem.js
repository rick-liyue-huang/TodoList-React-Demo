
import React, { Component } from 'react';

class TodoItem extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		// es6
		const { content } = this.props;
		return (
			<div 
				dangerouslySetInnerHTML={{__html: content}}
				onClick={this.handleClick} ></div>
		)
	}

	handleClick() {
		const { ItemDelete, index } = this.props;
		console.log(this.props.index);
		// this.props.ItemDelete(this.props.index);
		ItemDelete(index);
	}
}

export default TodoItem;













