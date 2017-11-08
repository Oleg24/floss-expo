import { combineReducers } from 'redux';
import navReducer from './NavReducer';
import events from './Events';
import eventInFocus from './EventInFocus';
import newEvent from './NewEvent';

// function showDatePicker(state = false, action){
//   switch(action.type){
//     case 'TOGGLE_DATE_PICKER':
//       return !action.showDatePicker
//     default:
//       return state
//   }
// }

const AppReducer = combineReducers({
  newEvent,
  nav : navReducer,
  events,
  eventInFocus,
});

export default AppReducer;
