
/*
	9th: import 'react-redux' to finish todolist

*/

import React, { Component, Fragment } from 'react';
// import store from './storeReactRedux';
import { connect } from 'react-redux';

const ListReactRedux = (props) => {
	return (
			<Fragment>
				<div>
					<input 
						value={props.inputValue}
						onChange={props.changeInputValue} />
					<button onClick={props.addItem} >submit</button>
				</div>
				<ul>
					{
						props.list.map((item, index) => {
							return (
								<li key={item}
									onClick={props.deleteItem.bind(this, index)} >{item}</li>
							)
						})
					}
				</ul>
			</Fragment>
		)
}

/*class ListReactRedux extends Component {

	render() {
		const { inputValue, list, changeInputValue, addItem } = this.props;

		return (
			<Fragment>
				<div>
					<input 
						value={inputValue}
						onChange={changeInputValue} />
					<button onClick={addItem} >submit</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return (
								<li key={item}
									dangerouslySetInnerHTML={{__html: item}}
									 ></li>
							)
						})
					}
				</ul>
			</Fragment>
		)
	}

}*/

// 2. map the 'store state' to 'component props'
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// dispatch => store.dispatch()
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e) {
			// console.log(e.target.value);
			const action = {
				type: 'change_input_value',
				value: e.target.value
			};
			dispatch(action);
		},

		addItem() {
			const action = {
				type: 'add_item'
			};
			dispatch(action);
		},

		deleteItem(index) {
			console.log(index);
			const action = {
				type: 'delete_item',
				index
			};
			dispatch(action);
		}
		
	}
}

// 1. connect store with list component
export default connect(mapStateToProps, mapDispatchToProps)(ListReactRedux);
















