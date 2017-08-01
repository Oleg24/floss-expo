import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.countdown}>{this.props.countdown}</Text>
        {this.props.wallPaperSource ?
          <Image source={{ uri: this.props.wallPaperSource}} style={styles.backgroundImage}/> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
