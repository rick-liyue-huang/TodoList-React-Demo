
import { INPUT_CLICK, INPUT_CHANGE, ADD_TODO, TOOGLE_TODO, SET_FILTER } from './actionTypes';

let nextId = 0;
export const inputClickAction = value => ({
  type: INPUT_CLICK,
  value
});

export const inputChangeAction = value => ({
  type: INPUT_CHANGE,
  value
});

export const addTodoAction = text => ({
  id: nextId++,
  type: ADD_TODO,
  text
});

export const toggleTodoAction = id => ({
  type: TOOGLE_TODO,
  id
});

export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter
});