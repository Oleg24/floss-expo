import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {getRemainingDays} from '../utility/date';
import PropTypes from 'prop-types';

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const {date, name, wallPaperSource, onClick, events} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={e=>{
          e.preventDefault();
          onClick({
            date,
            name,
            wallPaperSource
          }, events)
        }}
      >
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.countdown}>{getRemainingDays(date)} Days</Text>
        {wallPaperSource ?
          <Image source={{ uri: wallPaperSource}} style={styles.backgroundImage}/> : null }
      </View>
    </TouchableOpacity>
    )
  }
}

Event.propTypes = {
  date: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  onClick: PropTypes.func,
  wallPaperSource: PropTypes.string,
  wallPaperSource: PropTypes.string
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
