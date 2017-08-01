import moment from 'moment';

export const getRemainingDays = (date)=>{
  const today = moment(new Date());
  const eventDate = moment(date);
  return eventDate.diff(today, 'days');
}
