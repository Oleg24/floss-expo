import React, { Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Event from '../components/Event';

export default class EventView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('EVENT PROPS', this.props)

    const { date, name, wallPaperSource} = this.props.viewEvent;
    return (
      <Event
        name={name}
        date={date}
        wallPaperSource={wallPaperSource}
      />
    )
  }

}
