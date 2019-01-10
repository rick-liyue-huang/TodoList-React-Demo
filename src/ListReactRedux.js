
/*
	9th: import 'react-redux' to finish todolist

*/

import React, { Component, Fragment } from 'react';
// import store from './storeReactRedux';
import { connect } from 'react-redux';

class ListReactRedux extends Component {

	render() {
		return (
			<Fragment>
				<div>
					<input 
						value={this.props.inputValue}
						onChange={this.props.changeInputValue} />
					<button>submit</button>
				</div>
				<ul>
					<li>EN</li>
				</ul>
			</Fragment>
		)
	}

}

// 2. map the 'store state' to 'component props'
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue
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
		}
	}
}

// 1. connect store with list component
export default connect(mapStateToProps, mapDispatchToProps)(ListReactRedux);
















