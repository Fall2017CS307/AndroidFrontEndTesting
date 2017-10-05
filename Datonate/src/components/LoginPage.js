// Importing libraries
import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Button from 'react-native-button';

// Creating component
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  _userLogin() {
    var myRequest = new Request('http://11b364ee.ngrok.io/api/login', {method: 'POST', body: JSON.stringify({
      email: this.email,
      password: this.password,
    })
  });
    fetch(myRequest)
    .then(function(response) {
        if(response.status == 200) return response.json();
        else throw new Error('API fault detected.');
    })
    .then(function(response) {
        console.debug(response);
    })
    .catch(function(error) {
        console.error(error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { textStyle, viewStyle, bodytextStyle, textbar, buttonStyle, buttonStyle2, backgroundImage } = styles;

    return (
      <Image source={require('../images/background.jpg')} style={backgroundImage}>
      <View style={viewStyle}>
        <Text style={textStyle}>Datonate</Text>
        <Text style={bodytextStyle}>Login</Text>
        <TextInput placeholder='Email' style={textbar} onChangeText={(email) => this.setState({email})}/>
        <TextInput placeholder='Password' style={textbar} onChangeText={(password) => this.setState({password})}/>
        <Button style={buttonStyle} onPress={this._userLogin}> Go </Button>
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
