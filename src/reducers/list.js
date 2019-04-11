
import Immutable from 'immutable';
import { ADD_TODO, TOOGLE_TODO, FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from '../actions/actionTypes';

const defaultState = {
  isFetching: false,
  error: null,
  data: []
};

const list = (state = Immutable.fromJS([]), action) => {
  
  switch (action.type) {
    case ADD_TODO:
      const item = Immutable.fromJS(
        {
          id: action.id,
          text: action.text,
          completed: false
        });
      return state.push(item);

    case TOOGLE_TODO:
      return state.map(
        item =>
          item.get('id') === action.id ? 
            item.set('completed', !item.get('completed')) :
            item
      );
    
    default:
      return state;
  }
}

// deal with the async fetch state
// get immutable object
export default (state = Immutable.fromJS(defaultState), action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state.set('isFetching', true);

    case FETCH_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data)
      });

    case FETCH_FAILURE:
      return state.merge({
        isFetching: false,
        err: action.err
      });

    default:
      const data = state.get('data');
      return state.set('data', list(data, action))
      
  }
}
