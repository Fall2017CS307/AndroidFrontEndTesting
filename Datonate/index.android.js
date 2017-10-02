// Importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <Header headerText={'Datonate'} pagebodyText={'Login'}/>
  );
};

// Rendering
AppRegistry.registerComponent('Datonate', () => App);
