import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Button, Dimensions, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

class NavBar extends Component
{
  render(props){
    return(
      <View style={{
        //marginBottom: 20,
        //backgroundColor: '#fc7703',
        backgroundColor: this.props.color,
        height: 60,
        width: Dimensions.get('window').width,
        //flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
      }}>
        <View style={{
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <Icon
            name="chevron-left"
            type='evilicon'
            size={45}
          />
        </View>
        <View style={{
          paddingLeft: 30,
          marginLeft: 40,
          justifyContent: 'center',
          paddingLeft: 70,
        }}>
          <Text style={{
            fontSize: 18,
          }}>
            {this.props.text}
          </Text>
        </View>
      </View> 
    );
  }
}

export default NavBar;