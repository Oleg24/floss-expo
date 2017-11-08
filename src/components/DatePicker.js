import React, {Component} from 'React';
import {DatePickerIOS, View} from 'react-native';

const DatePicker = ({
  eventBeingCreated,
  showDatePicker,
  onDateChange
}) => {

  onDateChange = (date) => {
    onDateChange(date, eventBeingCreated);
  }

  renderDatePicker(){
    if(showDatePicker){
      return (
          <DatePickerIOS
            date={eventBeingCreated.date}
            mode="date"
            onDateChange={onDateChange}
          />
      )
    } else {
      return null;
    }
  }

  return (
      <View>
        {renderDatePicker()}
      </View>
  )
}
