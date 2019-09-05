
import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import text from './text';

export default combineReducers({
  todos,
  text,
  filter
});











/*
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from '../actions/actionTypes';

const initialState = {
  filter: 'all',
  text: 'text',
  todos: []
};

export const todoApp = (state = initialState, action) => {

  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          } 
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? {...todo, completed: 
            !todo.completed} : todo
        )
      }
    case SET_FILTER:
      return {
        ...state,
        filer: action.filer
      }
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
  
}

*/