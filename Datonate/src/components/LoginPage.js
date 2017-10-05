// Importing libraries
import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Button from 'react-native-button';

// Creating component
class LoginPage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    const { textStyle, viewStyle, bodytextStyle, textbar, buttonStyle, buttonStyle2, backgroundImage } = styles;
    this.state = { text: 'Email' };
    this.pstate = { text: 'Password' };

    return (
      <Image source={require('../images/background.jpg')} style={backgroundImage}>
      <View style={viewStyle}>
        <Text style={textStyle}>Datonate</Text>
        <Text style={bodytextStyle}>Login</Text>
        <TextInput style={textbar} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
        <TextInput style={textbar} onChangeText={(text) => this.setState({text})} value={this.pstate.text}/>
        <Button style={buttonStyle}> Go </Button>
        <Button style={buttonStyle2} onPress={() => navigate('Registration')}> Register </Button>
      </View>
      </Image>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    height: 700,
    paddingTop: 50,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50,
    color: '#ffffff'
  },
  bodytextStyle: {
    fontSize: 30,
    color: '#f5f5f2',
    paddingTop: 40,
    paddingBottom: 50
  },
  textbar: {
    height: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 0,
    paddingTop: 20,
    width: 200,
  },
  buttonStyle: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 100,
    marginTop: 60,
  },
  buttonStyle2: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 100,
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
};

// Exporting Component
export default LoginPage;
