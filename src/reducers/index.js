
import { combineReducers } from 'redux';
import filter from './filter';
import inputValue from './inputValue';
import list from './list';

export default combineReducers({
  list,
  inputValue,
  filter
});

// decompose the reducer to three reducers by the UI state.
/*
import { INPUT_CLICK, INPUT_CHANGE, ADD_TODO, TOOGLE_TODO, SET_FILTER } from '../actions/actionTypes';

const defaultState = {
  list: [],
  filter: 'all',
  inputValue: 'pls...'
};

export default (state = defaultState, action) => {
  
  switch(action.type) {
    case INPUT_CLICK:
      return {
        ...state,
        inputValue: action.value
      }

    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.value
      }

    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, {
          id: action.id,
          text: action.text,
          completed: false
        }],
        inputValue: ''
      }

    case TOOGLE_TODO:
      return {
        ...state,
        list: state.list.map(item => item.id === action.id ? {...item, completed: !item.completed} : item)
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }

    default: 
      return state;
  }
}
*/