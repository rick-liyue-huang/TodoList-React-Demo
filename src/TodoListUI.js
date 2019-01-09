

import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';

/*
	stateless component: one component only has render() method
	it is optimazed, because it is function only.

	normally, we select UI component as stateless component.
*/

const TodoListUI = (props) => {
	return (

			<Fragment>
				<div style={{marginTop: '10px', marginLeft: '10px'}}>
					<Input 
						placeholder='pls'
						value={props.inputValue}
						style={{width: '300px', marginRight: '10px'}}
						onChange={props.handleInputChange} />

					<Button 
						type='primary'
						onClick={props.handleBtnSubmit} >Submit</Button>
				</div>
				<List style={{width: '300px', marginTop: '10px', marginLeft: '10px'}}
		      bordered
		      dataSource={props.list}
		      renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}} >{item}</List.Item>)}
		    />
			</Fragment>
		)
}

/*class TodoListUI extends Component {

	render() {
		return (

			<Fragment>
				<div style={{marginTop: '10px', marginLeft: '10px'}}>
					<Input 
						placeholder='pls'
						value={this.props.inputValue}
						style={{width: '300px', marginRight: '10px'}}
						onChange={this.props.handleInputChange} />

					<Button 
						type='primary'
						onClick={this.props.handleBtnSubmit} >Submit</Button>
				</div>
				<List style={{width: '300px', marginTop: '10px', marginLeft: '10px'}}
		      bordered
		      dataSource={this.props.list}
		      renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}} >{item}</List.Item>)}
		    />
			</Fragment>
		)
	}
}*/

export default TodoListUI;