import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';


function AuthStack() {

    const Stack= createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Sign Up" component={Signup}/>
                <Stack.Screen name="Log In" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStack
