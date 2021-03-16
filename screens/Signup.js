import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/input';

function Signup({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.signup_container}>
                <Input placeholder={'Username'} plcolor={'#BDC0C7'} size={18}/>
                <Input placeholder={'Email'} plcolor={'#BDC0C7'} size={18}/>
                <Input placeholder={'Password'} plcolor={'#BDC0C7'} size={18}/>

                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <View style={styles.signup_btn}>
                        <Text style={{color : '#fff', fontSize : 20}}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection : 'row', alignSelf : 'center', marginTop : 32}}>
                    <Text style={{fontSize : 16, color : '#9B9B9B' }}>Already have an account?  </Text>
                    <Text 
                        style={{fontSize : 16, color : '#606060' }}
                        onPress={() => navigation.navigate('Log In')}
                    >
                        Login
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'flex-end',
        backgroundColor : '#283672'
    },
    signup_container : {
        height : '75%',
        backgroundColor : '#fff',
        borderTopLeftRadius : 16,
        borderTopRightRadius : 16,
        paddingTop : 64
    },
    signup_btn : {
        width : '86%',
        padding : 16,
        marginBottom : 24,
        backgroundColor : '#283672',
        alignSelf : 'center',
        alignItems : 'center',
        borderRadius : 64
    }
})

export default Signup
