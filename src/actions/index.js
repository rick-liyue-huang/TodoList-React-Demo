
import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO, TOGGLE_TODO, SET_FILTER, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

let nextId = 102;

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

const fetchRequestAction = () => ({
  type: FETCH_REQUEST
});

const fetchSuccessAction = data => ({
  type: FETCH_SUCCESS,
  data
});

const fetchFailureAction = err => ({
  type: FETCH_FAILURE,
  err
});

export const fetchTodoListAction = () => {
  return (dispatch) => {
    dispatch(fetchRequestAction());
    return fetch('./mock/list.json')
     .then(res => {
       res.json().then(data => {
         dispatch(fetchSuccessAction(data));
       })
     }, 
     err => {
       dispatch(fetchFailureAction(err));
       console.log('an err');
     })
  }
}

