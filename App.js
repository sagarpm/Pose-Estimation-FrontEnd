//import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import { color } from 'react-native-reanimated';
import NavBar from './components/navbar'
import Form from './components/form'

const myapp = () => {
  return(
    <>
      <NavBar color='#fc7703' text='LOG-IN'/>
      <Form colors={['#0093E9', '#80D0C7']} locations={[0.4, 0.75]} inputs={['USERNAME', 'PASSWORD']}/>
      //make login.js and signup.js so that we can make call them here. 
    </>
  );
}

export default myapp;