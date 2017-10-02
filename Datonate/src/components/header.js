// Importing libraries
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

// Creating component
const Header = (props) => {
  const { textStyle, viewStyle, bodytextStyle, textbar, buttonStyle } = styles;
  this.state = { text: 'Email' };
  this.pstate = { text: 'Password' };

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text style={bodytextStyle}>{props.pagebodyText}</Text>
      <TextInput style={textbar} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
      <TextInput style={textbar} onChangeText={(text) => this.setState({text})} value={this.pstate.text}/>
      <Button style={buttonStyle}> Go </Button>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#5795ec',
    alignItems: 'center',
    height: 700,
    paddingTop: 50,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50,
    color: '#000000'
  },
  bodytextStyle: {
    fontSize: 30,
    color: '#f5f5f2',
    paddingTop: 40,
    paddingBottom: 50
  },
  textbar: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    paddingTop: 20,
    width: 200,
  },
  buttonStyle: {
    fontSize: 20,
    color: '#2cdb49',
    borderWidth: 2,
    borderColor: '#2cdb49',
    width: 50,
    marginTop: 60,
  }
};

// Exporting Component
export default Header;
