
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from './actionTypes';
let nextId = 0;

export const addTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id
});


export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const setTodoText = value => ({
  type: SET_TODO_TEXT,
  value
});



