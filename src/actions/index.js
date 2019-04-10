
import { 
  INPUT_CLICK, INPUT_CHANGE, ADD_TODO, TOOGLE_TODO, SET_FILTER,
  FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

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

const fetchRequestAction = () => ({
  type: FETCH_REQUEST
});

const fetchSuccessAction = data => ({
  type: FETCH_SUCCESS,
  data
});

const fetchFailurAction = err => ({
  type: FETCH_FAILURE,
  err
});


// deal with async get data 
export const fetchListAction = () => {
  return (dispatch) => {
    dispatch(fetchRequestAction());
    return fetch('./mock/list.json').then(
      res => {
        res.json().then(data => {
          dispatch(fetchSuccessAction(data));
        })
      },
      err => {
        dispatch(fetchFailurAction(err));
        console.log('err: ', err);
      }
    )
  }
}