import React, { Component } from 'react';
import { Button } from 'react-native';

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
  <Button
    title = {props.title}
    color='#0be06e'
    //onPress = {sendRequest}
  />
  );
  }
}

export default Buttons;
