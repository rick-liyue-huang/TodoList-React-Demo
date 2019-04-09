
import { SET_TODO_TEXT } from '../actions/actionTypes';

export default (state = 'please', action) => {
  switch(action.type) {
    case SET_TODO_TEXT:
      return action.value
    default:
      return state;
  }
}