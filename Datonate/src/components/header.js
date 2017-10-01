// Importing libraries
import React from 'react';
import { Text, View } from 'react-native';

// Creating component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#6d9cff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 5,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 40,
    color: 'black'
  }
};

// Exporting Component
export default Header;
