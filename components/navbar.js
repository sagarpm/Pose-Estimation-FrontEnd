import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Button, Dimensions, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

class NavBar extends Component
{
  render(props){
    return(
      <View style={{
        backgroundColor: this.props.color,
        height: 60,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
      }}>
        <View style={{
            justifyContent: 'center',
            paddingLeft: 20,
          }}>
          <Icon
            name={this.props.iconname}
            type='evilicon'
            size={45}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{
          paddingLeft: 30,
          marginLeft: 40,
          justifyContent: 'center',
          paddingLeft: 70,
        }}>
          <Text style={{
            fontSize: 24,
          }}>
            {this.props.text}
          </Text>
        </View>
      </View> 
    );
  }
}

export default NavBar;