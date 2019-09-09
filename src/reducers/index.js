
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import inputValue from './inputValue';
import list from './list';
import filter from './filter';

export default combineReducers({
  inputValue,
  list,
  filter
});

// here only use single reducer, and put all state in one file.
// import { CLICK_INPUT, CHANGE_INPUT, ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actions/actionTypes';

// const initialState = {
//   inputValue: 'input',
//   list: [],
//   filter: 'all'
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     /**
//      * deal with CLICK_INPUT type
//      */
//     case CLICK_INPUT:
//       return {
//         ...state,
//         inputValue: action.value
//       };
//     /**
//      * deal with CHANGE_INPUT type
//      */
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         inputValue: action.value
//       };
//     /**
//      * deal with ADD_TODO type
//      */
//     case ADD_TODO:
//       return {
//         ...state,
//         list: [
//           ...state.list, {
//             id: action.id,
//             text: action.text,
//             completed: false
//           }
//         ],
//         inputValue: ''
//       };
//     /**
//      * deal with TOGGLE_TODO type
//      */
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         list: state.list.map(item => {
//           return item.id === action.id ? 
//           {...item, completed: !item.completed} : 
//           item
//         })
//       };
//     /**
//      * deal with SET_FILTER type
//      */
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: action.filter
//       };

//     default:
//       return state;
//   }
// }

