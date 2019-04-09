
import { 
	INPUT_CLICK, 
	INPUT_CHANGE, 
	ADD_ITEM, 
	DEL_ITEM,
	GET_SERVER_LIST } from './actionTypes';

// store all the state of project in 'defaultState'
const defaultState = {
	inputValue: 'ok',
	list: ['EN', 'JS', 'React.js']
};

export default (state = defaultState, action) => {

	// receive the action from component and deal with them by its type
	if(action.type === INPUT_CLICK) {
		// copy the previous action to new one, and change the new one to return
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if(action.type === INPUT_CHANGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if(action.type === ADD_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if(action.type === DEL_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	if(action.type === GET_SERVER_LIST) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.list;
		return newState;
	}

	return state;
}















