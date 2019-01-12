
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
















