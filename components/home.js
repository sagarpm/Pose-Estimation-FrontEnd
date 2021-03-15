import React, {Component} from 'react';
import {View, Button} from 'react-native';

class Home extends Component
{
    render()
    {
        return(
            <View>
                <View style={{margin: 15}}>
                    <Button title='Signup' onPress={() => this.props.navigation.navigate('Sign Up')}/>
                </View>
                <View style={{margin: 15}}>
                    <Button title='Login' onPress={() => this.props.navigation.navigate('Log In')}/>
                </View>
          </View>
        );
    }
}

export default Home;