
import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO } from '../actions/actionTypes';

export default (state = 'input', action) => {
  switch (action.type) {
    case CLICK_INPUT:
      return action.value;

    case CHANGE_INPUT:
      return action.value;

    case ADD_TODO:
      return '';
      
    default:
      return state;
  }
}
