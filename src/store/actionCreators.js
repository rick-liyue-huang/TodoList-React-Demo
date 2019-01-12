
<<<<<<< HEAD
import axios from 'axios';
// import action type
import { 
	INPUT_CLICK, 
	INPUT_CHANGE, 
	ADD_ITEM, 
	DEL_ITEM,
	GET_SERVER_LIST,
	GET_SAGA_LIST } from './actionTypes';

// create all actions here

export const inputClickAction = (value) => ({
	type: INPUT_CLICK,
	value
});

export const inputChangeAction = (value) => ({
	type: INPUT_CHANGE,
	value
});

export const addItemAction = () => ({
	type: ADD_ITEM
});

export const delItemAction = (index) => ({
	type: DEL_ITEM,
	index
});

export const getServerListAction = (list) => ({
	type: GET_SERVER_LIST,
	list
});

export const getThunkListAction = () => {

	return (dispatch) => {
		// get data here
		axios.get('/api/list')
			.then((res) => {
				// console.log(res.data);
				// here I dispatch action to reducer through store.
				
				const action = getServerListAction([...res.data]);
				dispatch(action);

			})
			.catch(() => {console.log('e')});
	}
}

// create this action, and will be executed in sagas.js
export const getSagaListAction = () => ({
	type: GET_SAGA_LIST
});



=======
import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST, GET_LIST_SAGA } from './actionTypes';
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
		axios.get('/api/list')
			.then((res) => {
				// console.log(res.data);
				// const data = res.data;
				const action = initListAction([...res.data]);
				dispatch(action);
			})
			.catch(() => {});
	}
}


// saga action
export const getListSagaAction = () => ({
	type: GET_LIST_SAGA,
});
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0













