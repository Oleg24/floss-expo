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

export const updateDate = (date, event) =>{
  return {
    type: 'UPDATE_DATE',
    date: date,
    event: event
  }
}
