import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {getRemainingDays} from '../utility/date';

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const date = this.props.countdown;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.countdown}>{getRemainingDays(date)} Days</Text>
        {this.props.wallPaperSource ?
          <Image source={{ uri: this.props.wallPaperSource}} style={styles.backgroundImage}/> : null }
      </View>
    )
  }
}

Event.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  name: {
    fontSize: 40
  },
  countdown: {
    fontSize: 32
  },
  backgroundImage: {
    height: 100,
    width: 100
  }
})
