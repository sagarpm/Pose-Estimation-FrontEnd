import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';

import {AuthContext} from '../navigation/AuthProvider';

function Signup({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {register} = useContext(AuthContext);

    return (
        <View style={styles.background}>
            <View style={styles.signup_container}>
                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormInput
                    labelValue={confirmPassword}
                    onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                    placeholderText="Confirm Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

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
    input_box : {
		backgroundColor : '#EDF0F7',
		width : '86%',
		borderRadius: 60,
		alignSelf : 'center',
		paddingLeft : 24,
		marginBottom : 24,
		height : 60,
		justifyContent : 'center'
	},
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
