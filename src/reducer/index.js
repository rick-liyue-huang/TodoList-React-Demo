
import { combineReducers } from 'redux';
import list from './list';
import filter from './filter';
import inputValue from './inputValue';

export default combineReducers({
  list,
  filter,
  inputValue
});

// import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from '../actions/actionTypes';
/*
const defaultState = {
  list: [],
  filter: 'all',
  inputValue: 'please'
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [
          {
            id: action.id,
            text: action.text,
            completed: false
          }, ...state.list ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(item => {
          item.id === action.id ? {
            ...item, completed: !item.completed
          } : item
        })
      }
    case SET_FILTER:
      return {
        ...state, filter: action.filter
      }
    case SET_TODO_TEXT:
      return {
        ...state, inputValue: action.value
      }
    default:
      return state;
  }
}

*/