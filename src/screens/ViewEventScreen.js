import React, { Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Event from '../components/Event';
import PropTypes from 'prop-types';

const EventView = ({ viewEvent}) => {
    const { date, name, wallPaperSource } = viewEvent;
    return (
      <Event
        name={name}
        date={date}
        wallPaperSource={wallPaperSource}
      />
    )
}

EventView.propTypes = {
  viewEvent: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
    wallPaperSource: PropTypes.string
  })
}

export default EventView;
