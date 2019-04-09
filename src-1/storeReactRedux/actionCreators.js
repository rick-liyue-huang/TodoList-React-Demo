
import axios from 'axios';

import { 
	INPUT_CLICK, 
	INPUT_CHANGE, 
	ADD_ITEM, 
	DEL_ITEM,
	SERVER_LIST,
	SAGA_LIST } from './actionTypes';

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

export const serverListAction = (list) => ({
	type: SERVER_LIST,
	list
});

/*export const sagaListAction = () => {
	return (dispatch) => {
		axios.get('/api/list')
			.then((res) => {
				console.log(res.data);
				const action = serverListAction([...res.data]);
				dispatch(action);
			}).catch((e) => {console.log(e)})
	}
}*/

export const sagaListAction = () => ({
	type: SAGA_LIST
});















