import React, {Component} from 'React';
import {View, Text, TextInput, StyleSheet, Switch, DatePickerIOS, TouchableOpacity } from 'react-native';

export default class CreateEvent extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: new Date(),
      repeatAnnually: false,
      showDatePicker: false
    }
    this.toggleDatePicker = this._toggleDatePicker.bind(this);
  }

  static navigationOptions = {
    title: 'Create New Event'
  }

  _handleToggleSwitch = () => this.setState(state => ({
    repeatAnnually: !this.state.repeatAnnually
  }));


  _onDateChange = (date) => this.setState(state => ({
    date: date
  }));

  _toggleDatePicker(){
    this.setState({
      showDatePicker: !this.state.showDatePicker
    })
  }

  _renderDatePicker(){
    if(this.state.showDatePicker){
      return (
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange={this._onDateChange}
          />
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <View>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.repeatAnnually}
        />
        <TouchableOpacity onPress={this.toggleDatePicker}>
          <Text>
            {this.state.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        <View>
          {this._renderDatePicker()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'salmon'
  }
});
