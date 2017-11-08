import { ADD_EVENT } from '../actions/ActionTypes';

const defaultEvents = [{
    name: 'my birthday',
    date: new Date(),
    repeatAnnually: false,
    wallPaperSource: null
  },{
    name: 'ukraine trip',
    date:  new Date(),
    repeatAnnually: true,
    wallPaperSource: null
  }, {
    name: 'visit dublin office',
    date: new Date(),
    repeatAnnually: false,
    wallPaperSource: null
  }];

function events(state = defaultEvents, action){
  switch(action.type){
    case ADD_EVENT:
      return [
        ...state,
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

export default events;
