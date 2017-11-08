import { ADD_EVENT, VIEW_EVENT, UPDATE_EVENT } from './ActionTypes';

export const addEvent = event => {
  return {
    type: ADD_EVENT,
    ...event
  }
}

export const viewEvent = (event) => {
  return {
    type: VIEW_EVENT,
    ...event
  }
}

export const toggleDatePicker = () =>{
  return {
    type: 'TOGGLE_DATE_PICKER'
  }
}

export const updateDate = (date) =>{
  return {
    type: 'UPDATE_DATE',
    date: date
  }
}

export const updateEvent = (event) =>{
  console.log('update event called with event', event)
  return {
    type: UPDATE_EVENT,
    event: event
  }
}
