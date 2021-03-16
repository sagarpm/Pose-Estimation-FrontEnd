import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Card from './card';
import NavBar from './navbar';
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component
{
    render()
    {
        const items = [
            {name: 'Yoga'},
            {name: 'Running'},
            {name: 'Push-Ups'},
            {name: 'Pull-Ups'},
            {name: 'HandStand'},
            {name: 'Sit-Ups'},
            {name: 'Squats'},
            {name: 'Streching'},
        ];
        return(
            <LinearGradient
                colors={["#3a1c71", "#d76d77", "#ffaf7b"]}
                locations={[0.0,0.5,1.0]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0}}
                useAngle={true}
                angle={90}
                angleCenter={{x: 0.5, y: 0.5}}
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                }}
            >
                <NavBar color='orange' text="Home"/>
                <FlatGrid
                    itemDimension={130}
                    data={items}
                    renderItem={({item}) => (
                        <Card activity={item.name}/>
                    )}
                />
                <View style={{margin: 15}}>
                    <Button title='Signup' onPress={() => this.props.navigation.navigate('Sign Up')}/>
                </View>
                <View style={{margin: 15}}>
                    <Button title='Login' onPress={() => this.props.navigation.navigate('Log In')}/>
                </View>
            </LinearGradient>
        );
    }
}

export default Home;