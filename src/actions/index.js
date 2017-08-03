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
