import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('CreateEvent');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;

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

const events = [{
    name: 'my birthday',
    countdown: 12
  },{
    name: 'ukraine trip',
    countdown: 39
  }, {
    name: 'visit dublin office',
    countdown: 52
  }];


const initialEventState = { events: events};

function manageEvent(state = initialEventState, action){
  console.log('eventAction', action);
  switch(action.type){
    case 'addEvent':
      return { ...state}

    default:
      return state;
  }

}

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
