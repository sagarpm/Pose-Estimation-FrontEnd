import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Welcome = (props) => {
    return(
        <View style={styles.background}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Sign Up')}>
                <View style={styles.signup_btn}>
                    <Text style={{color : '#fff', fontSize : 20}}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Log In')}>
                <View style={styles.login_btn}>
                    <Text style={{color : '#283672', fontSize : 20}}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        paddingBottom : 100,
        backgroundColor : '#74BEED',
        justifyContent : 'flex-end'
    },
    signup_btn : {
        width : '86%',
        padding : 16,
        marginBottom : 24,
        backgroundColor : '#283672',
        alignSelf : 'center',
        alignItems : 'center',
        borderRadius : 64
    },
    login_btn : {
        width : '86%',
        padding : 16,
        marginBottom : 24,
        backgroundColor : '#fff',
        alignSelf : 'center',
        alignItems : 'center',
        borderRadius : 64
    }
})

export default Welcome;