import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, TextInput, Dimensions, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateSignUp from './components/navigatesignup';
import NavigateLogIn from './components/navigatelogin';
import Home from './components/home';

const myapp = () => {
  //make login.js and signup.js so that we can make call them here.

  const Stack= createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={NavigateSignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Log In" component={NavigateLogIn} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default myapp;