import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Image, Button } from 'react-native';
//import Buttons from './Buttons'

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
                 number: "",
                 firstName: "",
                 lastName: "",
                 email: "",
                 password: "",
                     };
  }
  render(){
    const { navigate } = this.props.navigation;
    const {page, inputBox, container, header, buttonStyle, headerContainer, buttonViewStyle} = styles;
  return (
  <View style={page}>

  <View style={headerContainer}>
  <Text style={header}> Datonate </Text>
  </View>
  <View style={container}>
  <TextInput
    placeholder="First Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
    onChangeText = {(firstName)=> this.setState({firstName})}
    defaultValue = {this.state.firstName}
  />
  <TextInput
    placeholder="Last Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
    onChangeText = {(lastName)=> this.setState({lastName})}
    defaultValue = {this.state.lastName}
  />
  <TextInput
    placeholder="E-mail"
    returnKeyType = "next"
    keyboardType = "email-address"
    autoCapitalize = "none"
    autoCorrect =  {false}
    style = {inputBox}
    onChangeText = {(email)=> this.setState({email})}
    defaultValue = {this.state.email}
  />
  <TextInput
    placeholder="Password"
    returnKeyType = "next"
    secureTextEntry
    autoCapitalize = "none"
    autoCorrect =  {false}
    onChangeText = {(password)=> this.setState({password})}
    defaultValue = {this.state.password}
    style = {inputBox}
  />
  <TextInput
  style={inputBox}
  placeholder = "Phone number"
  keyboardType = 'numeric'
  onChangeText = {(number)=> this.onChangeNumber(number)}
  defaultValue = {this.state.number}
  maxLength = {10}  //setting limit of input
  />
  <View style = {buttonViewStyle}>
  <Button
    title="Register"
    // firstName = {this.state.firstName}
    // lastName = {this.state.lasttName}
    // password = {this.state.password}
    // email = {this.state.email}
    // number = {this.state.number}
    style={buttonStyle}
    onPress = {this.sendRequest.bind(this)}

  />
  </View>
  </View>
  </View>
  );
  }
  sendRequest() {
    //console.log(this.state.firstName);
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.number;
    var request = new Request('http://65db2b5d.ngrok.io/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        phone: phone,
      })
    });
    fetch(request)
    .then(function(response){
      //console.log(name);
      console.log(response);
    })
    .catch(function(error){
      //console.log(this.state.firstName);
      alert("Error caught");
      console.log(error);
    });
  }
  onChangeNumber(text){
   let newText = '';
   let numbers = '0123456789';

   for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
             newText = newText + text[i];
        }
        else {
              // your call back function
              alert("Please enter numbers only");
         }
         this.setState({ number: newText });
        // console.log(this.state);
    }
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#99d8f7',
    flex: 1,
  },
  container: {
    marginTop: 50,
  },
  inputBox: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    //backgroundColor: '#ffffff',
    color: '#000000',
  },
  header: {
    alignItems: 'center',
    fontSize: 40,
    color: '#000000',
  },
  buttonViewStyle: {
    alignItems: 'center',
    //marginLeft: 100,
    //marginRight: 100,
    marginTop: 20,
    width: 350,
  },
  buttonStyle: {
        color: '#0be06e',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },

});

export default Registration;
