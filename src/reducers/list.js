
import { ADD_TODO, TOOGLE_TODO } from '../actions/actionTypes';

export default (state = [], action) => {
  
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
          id: action.id,
          text: action.text,
          completed: false
        }];
    case TOOGLE_TODO:
      return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item);
    default:
      return state;
  }
}
