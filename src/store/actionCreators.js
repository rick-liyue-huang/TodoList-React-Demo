
import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes';
import axios from 'axios';


export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getItemSubmitAction = () => ({
	type: SUBMIT_TODO_ITEM
});

export const getItemDeleteAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST,
	data
});


// thunk 的作用就是让actionCreators.js 里面定义的actions 
// 都可以返回函数，而不是只是对象，这样就可以将一些异步操作（ajax/axios）放到
// 这里面执行。
// 将异步加载放到actionCreators.js里面方便统一管理，也有利于自动化测试
export const getTodoList = () => {
	// dispatch => store.dispatch
	return (dispatch) => {
		axios.get('/api/todolist')
			.then((res) => {
				// console.log(res.data);
				const data = res.data;
				const action = initListAction(data);
				dispatch(action);
			})
			.catch(() => {});
	}
}













