import React, {Component} from 'React';
import {View, Text, TextInput, StyleSheet, Switch } from 'react-native';

export default class CreateEvent extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: '',
      repeatAnnually: false
    }
  }

  static navigationOptions = {
    title: 'Create New Event'
  }

  _handleToggleSwitch = () => this.setState(state => ({
    repeatAnnually: !state.repeatAnnually
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
