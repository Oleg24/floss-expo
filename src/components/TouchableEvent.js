import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Event from './Event';
import PropTypes from 'prop-types';

const TouchableEvent = ({date, name, wallPaperSource, onClick, events}) => {
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
      <Event
        name={name}
        date={date}
        wallPaperSource={wallPaperSource}
      />
    </TouchableOpacity>
  )
}

TouchableEvent.propType = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      repeatAnnually: PropTypes.bool.isRequired,
      wallPaperSource: PropTypes.string
    }).isRequired
  ).isRequired,
  date: PropTypes.instanceOf(Date),
  name: PropTypes.string,
  wallPaperSource: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }
});

export default TouchableEvent;
