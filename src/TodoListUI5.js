
// create UI component 

import React, { /*Component,*/ Fragment } from 'react';
import { Input, Button, List } from 'antd';

/*class TodoListUI5 extends Component {

	render() {

		const { 
			inputValue, 
			list, 
			handleInputClick,
			handleInputChange,
			handleBtnAdd,
			handleItemDel } = this.props;

		return (
			<Fragment>
				<div style={{marginTop: 10, marginLeft: 10}}>
					<label htmlFor='insert' >Input Content </label>
					<Input 
						id='insert'
						style={{width: '300px', marginRight: '10px'}}
						value={inputValue}
						onClick={handleInputClick}
						onChange={handleInputChange} />
					<Button 
						type='primary'
						onClick={handleBtnAdd} >Submit</Button>
				</div>
				<List
					style={{width: '399px', marginTop: 10}}
		      bordered
		      dataSource={list}
		      renderItem={(item, index) => (
		      	<List.Item onClick={() => {handleItemDel(index)}} >{item}</List.Item>)}
		    />
			</Fragment>
		)
	}
}*/

const TodoListUI5 = (props) => {
	return (
			<Fragment>
				<div style={{marginTop: 10, marginLeft: 10}}>
					<label htmlFor='insert' >Input Content </label>
					<Input 
						id='insert'
						style={{width: '300px', marginRight: '10px'}}
						value={props.inputValue}
						onClick={props.handleInputClick}
						onChange={props.handleInputChange} />
					<Button 
						type='primary'
						onClick={props.handleBtnAdd} >Submit</Button>
				</div>
				<List
					style={{width: '399px', marginTop: 10}}
		      bordered
		      dataSource={props.list}
		      renderItem={(item, index) => (
		      	<List.Item onClick={() => {props.handleItemDel(index)}} >{item}</List.Item>)}
		    />
			</Fragment>
		)
}

export default TodoListUI5;








