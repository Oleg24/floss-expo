export const addEvent = event => {
  return {
    type: 'ADD_EVENT',
    ...event
  }
}

export const viewEvent = (event, events) => {
  return {
    type: 'VIEW_EVENT',
    name: event.name,
    events: events
  }
}

export const toggleDatePicker = showDatePicker =>{
  return {
    type: 'TOGGLE_DATE_PICKER',
    showDatePicker: showDatePicker
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
    type: 'UPDATE_EVENT',
    event: event
  }
}
