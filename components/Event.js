import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.countdown}>{this.props.countdown}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 40
  },
  countdown: {
    fontSize: 32
  }
})
