
import { CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

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



