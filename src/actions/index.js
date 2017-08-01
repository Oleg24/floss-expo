export const addEvent = event => {
  console.log('EVENT action', event)
  return {
    type: 'ADD_EVENT',
    ...event
  }
}
