import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CreateEvent from './src/screens/CreateEventScreen';
import { StackNavigator } from 'react-navigation';


export default StackNavigator({
  Home: {screen: HomeScreen},
  CreateEvent: {screen: CreateEvent}
});
