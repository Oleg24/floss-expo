import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('CreateEvent');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function navReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'CreateEvent':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateEvent'}),
        state
      );
      break;
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

const AppReducer = combineReducers({
  nav : navReducer,
  events
});

export default AppReducer;
