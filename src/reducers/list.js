
import { ADD_TODO, TOGGLE_TODO, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.err
      };

    default:
      return {
        ...state,
        data: list(state.data, action)
      }
  }
}

const list = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        }, ...state
      ];

    case TOGGLE_TODO:
      return state.map(item => {
        return item.id === action.id ? 
          {...item, completed: !item.completed} : 
          item;
      });
      
    default:
      return state;
  }
}

export default reducer;