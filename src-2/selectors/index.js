

// use reselect to modify select methods
import { createSelector } from 'reselect';

export const getValue = (state) => state.get('inputValue');
export const getFilter = (state) => state.get('filter');

const getData = state => state.getIn(['list', 'data']);

export const getVisibleList = createSelector(
  [getData, getFilter],
  (data, filter) => {
    console.log('getVisibleList');
    switch(filter) {
      case 'all':
        return data;
      case 'completed':
        return data.filter(item => item.get('completed'));
      case 'active':
        return data.filter(item => !item.get('completed'));
      default:
        return new Error('unknown filter: ', filter);
    }
  }
)

// will use immutable
/*
export const getValue = (state) => state.get('inputValue');
export const getFilter = (state) => state.get('filter');

export const getVisibleList = (state) => {
  const data = state.getIn(['list', 'data']);
  const filter = state.get('filter');
  
  switch(filter) {
    case 'all':
      return data;
    case 'completed':
      return data.filter(item => item.get('completed'));
    case 'active':
      return data.filter(item => !item.get('completed'));
    default:
      return new Error('unknown filter: ', filter);
  }
};
*/
/*

export const getValue = (state) => state.inputValue;
export const getFilter = (state) => state.filter;

export const getVisibleList = (state) => {
  const { list: {data}, filter } = state;
  switch(filter) {
    case 'all':
      return data;
    case 'completed':
      return data.filter(item => item.completed);
    case 'active':
      return data.filter(item => !item.completed);
    default:
      return new Error('unknown filter: ', filter);
  }
};

*/

