
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from './actionTypes';

let nextTodoId = 0;

/**
 * add todo
 */
export const addTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter
});

export const setTodoTextAction = text => ({
  type: SET_TODO_TEXT,
  text
});

