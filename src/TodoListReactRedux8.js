
import React, { Component, Fragment } from 'react';
// connect from react-redux
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import TodoListUI5 from './TodoListUI5';
// import axios from 'axios';

// import actions from 'actionCreators'
import { 
	inputClickAction,
  inputChangeAction,
	addItemAction,
	delItemAction,
	/*serverListAction,*/
	sagaListAction } from './storeReactRedux/actionCreators';

class TodoListReactRedux8 extends Component {

	render() {
		// optimazed
		const { 
			inputValue,
			list,
			handleInputClick,
			handleInputChange,
			handleBtnAdd,
			handleItemDel } = this.props;
			
		return (
			<Fragment>
		    <TodoListUI5 
		    	inputValue={inputValue}
		    	list={list}
		    	handleInputClick={handleInputClick}
		    	handleInputChange={handleInputChange}
		    	handleBtnAdd={handleBtnAdd}
		    	handleItemDel={handleItemDel} />
			</Fragment>
		)
	}

	componentDidMount() {
		this.props.handleServerList();
	}
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputClick() {
			/*const action = {
				type: 'input_click',
				value: ''
			}*/
			const action = inputClickAction('');
			dispatch(action);
		},

		handleInputChange(e) {
			/*const action = {
				type: 'input_change',
				value: e.target.value
			};*/
			const action = inputChangeAction(e.target.value);
			dispatch(action);
		},

		handleBtnAdd() {
			/*const action = {
				type: 'add_item'
			};*/
			const action = addItemAction();
			dispatch(action);
		},

		handleItemDel(index) {
			console.log(index);
			/*const action = {
				type: 'del_item',
				index
			};*/
			const action = delItemAction(index);
			dispatch(action);
		},

		handleServerList() {
			const action = sagaListAction();
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux8);

















