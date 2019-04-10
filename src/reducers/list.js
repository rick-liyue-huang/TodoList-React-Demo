
import { ADD_TODO, TOOGLE_TODO, FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from '../actions/actionTypes';

const defaultState = {
  isFetching: false,
  error: null,
  data: []
};

const list = (state = [], action) => {
  
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

// deal with the async fetch state
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.err
      }
    default:
      return {
        ...state,
        data: list(state.data, action)
      }
  }
}
