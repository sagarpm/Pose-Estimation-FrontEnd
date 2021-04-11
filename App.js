import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup'
import Home from './components/home';
import Welcome from './screens/Welcome';

const myapp = () => {
  //make login.js and signup.js so that we can make call them here.

  const Stack= createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sign Up" component={Signup}/>
        <Stack.Screen name="Log In" component={Login}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default myapp;