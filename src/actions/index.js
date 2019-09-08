
import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextId = 0;

/**
 * 
 * @param {*} value 
 */
export const clickInputAction = value => ({
  type: CLICK_INPUT,
  value
});
/**
 * 
 * @param {*} value 
 */
export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});
/**
 * 
 * @param {*} text 
 */
export const addTodoActioin = text => ({
  type: ADD_TODO,
  id: nextId++,
  text
});
/**
 * 
 * @param {*} id 
 */
export const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id
});
/**
 * 
 * @param {*} filter 
 */
export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter
});

