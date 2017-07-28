import React, {Component } from 'React';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Header extends Component {
  constructor(){
    super();
    this.addEvent = this._addEvent.bind(this);
  }

  _addEvent = () => {
    console.warn('adding event')
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hour Glass</Text>
          <Button
            style={styles.addEventBtn}
            title="Add Event"
            onPress={this.addEvent}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent:'space-between'
  },
  addEventBtn: {

  },
  title: {
    alignSelf: 'center'
  }

});
