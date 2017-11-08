import { HOME, VIEW_EVENT} from '../actions/ActionTypes';

function eventInFocus(state = {}, action){
  switch(action.type){
    case VIEW_EVENT:
        return {
          name: action.name
        };
    default:
      return state;
  }
}

export default eventInFocus;
