import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {getRemainingDays} from '../utility/date';

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const {date, name, wallPaperSource} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.countdown}>{getRemainingDays(date)} Days</Text>
        {wallPaperSource ?
          <Image source={{ uri: wallPaperSource}} style={styles.backgroundImage}/> : null }
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
