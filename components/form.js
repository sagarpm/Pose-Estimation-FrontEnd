import React, {Component} from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Form extends Component //make a new file called input.js which will return TextInput component of a particular type and from here we will call as many inputs are needed according to the requirment. this will be named as login.js and we will have to make a seperate signup.js
{
    render(props)
    {
        return(
            <LinearGradient
                //colors={['#0093E9', '#80D0C7']}
                colors={this.props.colors}
                locations={this.props.locations}//{[0.0, 1.0]}
                start={this.props.start}//{{x: 0, y: 0}}
                end={this.props.end}//{{x: 1, y: 1}}
                useAngle={true}
                angle={this.props.angle}//{135}
                angleCenter={{x: 0.5, y: 0.5}}
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                //alignContent: 'center'
                }}
            >
                <View
                style={{
                    alignItems: 'center',
                    borderWidth: 3,
                    //borderRadius: 10,
                    marginLeft: 50,
                    marginRight: 50,
                    height: 250
                }}>
                    <View
                    style={{width: Dimensions.get('window').width - 100}}
                    >
                    <TextInput
                    placeholder={this.props.inputs[i]}//"USERNAME"
                    style={{
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'black',
                        marginTop: 60,
                        width: 250,
                        alignSelf: 'center',
                        paddingLeft: 15
                        }}
                        placeholderTextColor="#18a81a"
                    />
                    <TextInput
                        placeholder="PASSWORD"
                        style={{
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'black',
                        marginTop: 10,
                        width: 250,
                        alignSelf: 'center',
                        paddingLeft: 15
                        }}
                        placeholderTextColor="#18a81a"
                    />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

export default Form;