
/*

// normally use js
export const getInputValue = state => state.inputValue;
export const getFilter = state => state.filter;
export const handleGetVisibleList = state => {
  const { filter, list: {data} } = state;
  if(filter === 'all') {
    return data;
  } else if(filter === 'active') {
    return data.filter(item => !item.completed);
  } else if (filter === 'completed') {
    return data.filter(item => item.completed);
  } else {
    return new Error('unknown filter: ', filter);
  }
}

*/

/*
// step six: use immutable object
export const getInputValue = state => state.get('inputValue');
export const getFilter = state => state.get('filter');
export const handleGetVisibleList = state => {
  const filter = state.get('filter');
  const data = state.getIn(['list', 'data']);
  
  if(filter === 'all') {
    return data;
  } else if(filter === 'active') {
    return data.filter(item => !item.get('completed'));
  } else if (filter === 'completed') {
    return data.filter(item => item.get('completed'));
  } else {
    return new Error('unknown filter: ', filter);
  }
}

*/

// step eight: use reselect library
import { createSelector } from 'reselect';
export const getInputValue = state => state.get('inputValue');
export const getFilter = state => state.get('filter');

const getList = state => state.getIn(['list', 'data']);
export const handleGetVisibleList = createSelector(
  [getList, getFilter],
  (list, filter) => {

    console.log('getVisibleTodos');

    switch (filter) {
      case 'all':
        return list;
      case 'completed': 
        return list.filter(t => t.get('completed'));
      case 'active': 
        return list.filter(t => !t.get('completed'));
      default:
        return new Error('unknown filter: ', filter);
    }
  }
)