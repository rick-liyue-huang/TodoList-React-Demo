
import { INPUT_CLICK, INPUT_CHANGE, ADD_TODO, TOOGLE_TODO, SET_FILTER } from '../actions/actionTypes';

export default (state = 'pls...', action) => {
  
  switch(action.type) {
    case INPUT_CLICK:
      return action.value;
    case INPUT_CHANGE:
      return action.value;
    case ADD_TODO:
      return '';
    default: 
      return state;
    
  }
}