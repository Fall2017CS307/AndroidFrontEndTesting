// Importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import LoginPage from './src/components/LoginPage';
import Registration from './src/components/Registration';
import Landing from './src/components/Landing';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Registration: { screen: Registration },
  Landing: { screen: Landing }
});

// Rendering
AppRegistry.registerComponent('Datonate', () => App);
