
<<<<<<< HEAD
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
=======
import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes';

// state: 
const defaultState = {
	inputValue: 'ok',
	list: []
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
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

<<<<<<< HEAD
	if(action.type === DEL_ITEM) {
=======
	if(action.type === DELETE_TODO_ITEM) {
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

<<<<<<< HEAD
	if(action.type === GET_SERVER_LIST) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.list;
=======
	if(action.type === INIT_LIST) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
		return newState;
	}

	return state;
}












<<<<<<< HEAD



=======
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
