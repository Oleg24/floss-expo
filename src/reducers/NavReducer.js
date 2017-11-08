import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { HOME, CREATE_EVENT, VIEW_EVENT, ADD_EVENT } from '../actions/ActionTypes'

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('CreateEvent');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function navReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case CREATE_EVENT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateEvent'}),
        state
      );
      break;
    case VIEW_EVENT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ViewEvent'}),
        state
      )
      break
    case ADD_EVENT:
    case HOME:
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

export default navReducer;
