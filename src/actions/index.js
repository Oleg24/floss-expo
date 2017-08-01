export const addEvent = event => {
  console.log('event', event)
  return {
    type: 'ADD_EVENT',
    ...event
  }
}
