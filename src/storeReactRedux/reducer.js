
import { 
	INPUT_CLICK, 
	INPUT_CHANGE, 
	ADD_ITEM, 
	DEL_ITEM,
	SERVER_LIST } from './actionTypes';

const defaultState = {
	inputValue: 'ok',
	list: ['en', 'js']
};

export default (state = defaultState, action) => {

	const newState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case INPUT_CLICK:
			newState.inputValue = action.value;
			return newState;

		case INPUT_CHANGE:
			newState.inputValue = action.value;
			return newState;

		case ADD_ITEM:
			newState.list.push(newState.inputValue);
			newState.inputValue = '';
			return newState;

		case DEL_ITEM:
			newState.list.splice(action.index, 1);
			return newState;

		case SERVER_LIST:
			newState.list = action.list;
			return newState;

		default:
			return state;
	}
}













