import React, {Component} from 'React';
import {View, Text, TextInput, StyleSheet, Switch, DatePickerIOS } from 'react-native';

export default class CreateEvent extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: new Date(),
      // timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      repeatAnnually: false
    }
  }

  static navigationOptions = {
    title: 'Create New Event'
  }

  _handleToggleSwitch = () => this.setState(state => ({
    repeatAnnually: !state.repeatAnnually
  }));


  _onDateChange = (date) => this.setState(state => ({
    date: date
  }));

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
        <Text>
          {this.state.date.toLocaleDateString()}
        </Text>
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this._onDateChange}
        />
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
