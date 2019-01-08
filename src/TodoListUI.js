

import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {

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
}

export default TodoListUI;