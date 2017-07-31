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
  console.log('nav action', action)
  switch (action.type) {
    case 'CreateEvent':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateEvent'}),
        state
      );
      break;
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

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const defaultEvents = [{
    name: 'my birthday',
    countdown: 12
  },{
    name: 'ukraine trip',
    countdown: 39
  }, {
    name: 'visit dublin office',
    countdown: 52
  }];


const initialEventState =  defaultEvents;

function events(state = initialEventState, action){
  switch(action.type){
    case 'addEvent':
      return { ...state, events};
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  events,
  nav : navReducer
});

export default AppReducer;
