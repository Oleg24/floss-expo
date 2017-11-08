import {UPDATE_EVENT, HOME, ADD_EVENT} from '../actions/ActionTypes';

const defaultEvent = {
  name: '',
  date: new Date(),
  repeatAnnually: false,
  showDatePicker: false,
  wallPaperSource: null
}

function newEvent(state = defaultEvent, action){
  switch(action.type){
      // return Object.assign({}, state, {date: action.date})
    case 'UPDATE_DATE':
    case UPDATE_EVENT:
      return Object.assign({}, state, action.event);
    case HOME:
    case ADD_EVENT:
      return defaultEvent;
    default:
      return state
  }
}

export default newEvent
