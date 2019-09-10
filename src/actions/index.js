
import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO, TOGGLE_TODO, SET_FILTER, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

let nextId = 102;


// step four: define best practice in net request
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

// define thunk method to get list
export const fetchThunkListAction = () => {
  return (dispatch) => {
    dispatch(fetchRequestAction());
    return fetch('./mock/list.json').then(
      res => {
        res.json().then(data => {
          dispatch(fetchSuccessAction(data));
        })
      },
      err => {
        dispatch(fetchFailureAction(err));
        console.log('an err: ', err);
      }
    )
  }
}

// define the actionCreators
export const clickInputAction = value => ({
  type: CLICK_INPUT,
  value
});

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addTodoAction = text => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id
});

export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter
});

