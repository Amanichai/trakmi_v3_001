import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import AccountScreen from './src/screens/AccountScreen';
import CreateTrackScreen from './src/screens/CreateTrackScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const switchNavigator = createSwitchNavigator({
  loginflow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainflow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
    Tracks: TrackListScreen,
    Details: TrackDetailScreen  
    }),
    Create: CreateTrackScreen,
    Account: AccountScreen
  })
});

export default createAppContainer(switchNavigator);