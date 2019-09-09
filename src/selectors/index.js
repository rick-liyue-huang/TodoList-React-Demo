
// globale management state 

// A selector is simply a funtion that accepts redux state as an argument and return data that is derived from that state.
/**
 * It is a best practice to keep your Redux store state minimal and derive data from the state as needed. Selectors help with that. They can compute derived data, allowing Redux to store the minimal possible state. Selectors are also very efficient. A selector is not recomputed unless one of its arguments changes.
 */

/*

export const getInputValue = state => state.inputValue;
export const getFilter = state => state.filter;
export const handleVisibleList = (state) => {
  const { filter, list: {data} } = state;
  switch(filter) {
    case 'all':
      return data;
    case 'active':
      return data.filter(item => !item.completed);
    case 'completed':
      return data.filter(item => item.completed);
    default:
      return new Error('unknown filter: ', filter);
  }
}

*/

// here state is already become immutable object

/*
export const getInputValue = state => state.get('inputValue');
export const getFilter = state => state.get('filter');
export const handleVisibleList = (state) => {
  const data = state.getIn(['list', 'data']);
  const filter = state.get('filter');
  console.log('handleVisibleList');
  switch(filter) {
    case 'all':
      return data;
    case 'active':
      return data.filter(item => !item.get('completed'));
    case 'completed':
      return data.filter(item => item.get('completed'));
    default:
      return new Error('unknown filter: ', filter);
  }
}

*/

// In selectors/index.js file, inputValue filter changing will trigger handleVisibleList method. so we will use reselect library to cancel this affect between differen methods in selector/index.js.

import { createSelector } from 'reselect';

export const getInputValue = state => state.get('inputValue');
export const getFilter = state => state.get('filter');

const getList = state => state.getIn(['list', 'data']);

export const handleVisibleList = createSelector(
  [getFilter, getList],
  (filter, list) => {
    console.log('handleVisibleList');
    switch(filter) {
      case 'all':
        return list;
      case 'active':
        return list.filter(item => !item.get('completed'));
      case 'completed':
        return list.filter(item => item.get('completed'));
      default:
        return new Error('unknown filter: ', filter);
    }
  }
)