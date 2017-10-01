// Importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import LoginBody from './src/components/loginbody'

const App = () => {
  return (
    <Header headerText={'🔥Datonate🔥'}/>
  );
};

// Rendering
AppRegistry.registerComponent('Datonate', () => App);
