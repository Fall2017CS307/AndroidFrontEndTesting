/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Registration from './src/Components/Registration'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = () => {
  return (
  <Registration />
  );
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Datonate', () => App);
