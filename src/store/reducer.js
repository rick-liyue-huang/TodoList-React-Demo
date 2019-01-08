
import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

// state: 
const defaultState = {
	inputValue: 'please',
	list: ['EN', 'JS', 'React.js']
};


// reducer can receive state, but never modify state, so we
// have to copy state and modify the newState.
export default (state = defaultState, action) => {
	// console.log(state, action);
	if(action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState; // return to store
	}

	if(action.type === SUBMIT_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if(action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	return state;
}












