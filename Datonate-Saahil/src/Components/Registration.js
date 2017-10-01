import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
const Registration = () => {
  const {page, inputBox, container, header} = styles;
  return (
  <View style={page}>
  <Text style={header}> Datonate </Text>
  <View style={container}>
  <TextInput
    placeholder="First Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="Last Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="E-mail"
    returnKeyType = "next"
    keyboardType = "email-address"
    autoCapitalize = "none"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="Password"
    returnKeyType = "next"
    secureTextEntry
    autoCapitalize = "none"
    autoCorrect =  {false}
    style = {inputBox}
  />
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#99d8f7',
    flex: 1,
  },
  container: {
    marginTop: 100,
  },
  inputBox: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  header: {
    alignItems: 'center',
    fontSize: 40,
  }
});

export default Registration;
