// Importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import LoginPage from './src/components/LoginPage';
import Registration from './src/components/Registration';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Registration: { screen: Registration }
});

// Rendering
AppRegistry.registerComponent('Datonate', () => App);
