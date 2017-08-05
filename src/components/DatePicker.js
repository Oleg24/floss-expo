import React, {Component} from 'React';
import {DatePickerIOS, View} from 'react-native';

const DatePicker = ({showDatePicker, onDateChange, date, event }) {

  _renderDatePicker(){
    if(this.state.showDatePicker){
      return (
          <DatePickerIOS
            date={date}
            mode="date"
            onDateChange={onDateChange(date, event)}
          />
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <View>
        {this._renderDatePicker()}
      </View>
    )
  }

}
