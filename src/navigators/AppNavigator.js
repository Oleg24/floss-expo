import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../containers/HomeScreenContainer';
import CreateEvent from '../containers/CreateEventContainer';
import ViewEvent from '../containers/ViewEventContainer';

export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen},
  CreateEvent: { screen: CreateEvent},
  ViewEvent : { screen: ViewEvent }
});

const AppWithNavigationState = ({ dispatch, nav }) => {
  return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})}/>
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
