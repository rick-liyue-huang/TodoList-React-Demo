
// import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actions/actionTypes';

// import sub reducers 
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import inputValue from './inputValue';
import list from './list';
import filter from './filter';

// 
export default combineReducers({
  inputValue,
  list,
  filter
});


/*
const initialState = {
  inputValue: 'input',
  list: [],
  filter: 'all'
};

export default (state = initialState, action) => {

  // match the actionCreators by action.type
  switch (action.type) {
    case CLICK_INPUT:
      return {
        ...state,
        inputValue: action.value
      };

    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.value
      };

    case ADD_TODO:
      return {
        ...state,
        list: [
          {
            id: action.id,
            text: action.text,
            completed: false
          },
        ...state.list],
        inputValue: ''
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(item => {
          return item.id === action.id 
          ? {...item, completed: !item.completed} 
          : item;
        })
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
      
    default:
      return state;
  }
}

*/