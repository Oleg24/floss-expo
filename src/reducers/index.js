import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { find } from 'lodash';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('CreateEvent');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function navReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'CREATE_EVENT':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateEvent'}),
        state
      );
      break;
    case 'VIEW_EVENT':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ViewEvent'}),
        state
      )
      break
    case 'ADD_EVENT':
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

const defaultEvents = [{
    name: 'my birthday',
    date: new Date(),
    repeatAnnually: false,
    wallPaperSource: null
  },{
    name: 'ukraine trip',
date: new Date(),
    repeatAnnually: false,
    wallPaperSource: null
  }, {
    name: 'visit dublin office',
    date: new Date(),
    repeatAnnually: false,
    wallPaperSource: null
  }];


const initialEventState =  defaultEvents;

function events(state = initialEventState, action){
  switch(action.type){
    case 'ADD_EVENT':
      return [ ...state,
        {
          name: action.name,
          date: action.date,
          repeatAnnually: action.repeatAnnually,
          wallPaperSource: action.wallPaperSource || null
        }];
    default:
      return state;
  }
}

function viewEvent(state = initialEventState, action){
  switch(action.type){
    case 'VIEW_EVENT':
        const event = find(action.events, event =>(
          event.name = action.name
        ));
        return event
    default:
      return state;
  }
}

function showDatePicker(state = false, action){
  switch(action.type){
    case 'TOGGLE_DATE_PICKER':
      return !action.showDatePicker
    default:
      return state
  }
}

const defaultEvent = {
  name: '',
  date: new Date(),
  repeatAnnually: false,
  showDatePicker: false,
  wallPaperSource: null
}


function newEvent(state = defaultEvent, action){
  switch(action.type){
    case 'UPDATE_DATE':
      return Object.assign({}, state, {date: action.date})
    case 'UPDATE_EVENT':
      return Object.assign({}, state, action.event);
    case 'HOME':
    case 'ADD_EVENT':
      return defaultEvent;
    default:
      return state
  }
}


const AppReducer = combineReducers({
  newEvent,
  nav : navReducer,
  events,
  viewEvent,
  showDatePicker
});

export default AppReducer;
