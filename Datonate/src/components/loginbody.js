// Importing libraries
import React from 'react';
import { Text, View } from 'react-native';

// Creating component
const LoginBody = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.bodyText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 5,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 40,
    color: 'green'
  }
};

// Exporting Component
export default LoginBody;
