import React, {Component} from 'react';
import {Button, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from './input';

class Signup extends Component
{
    render(props)
    {
        return(
            <LinearGradient
                colors={this.props.colors}
                locations={this.props.locations}
                start={this.props.start}
                end={this.props.end}
                useAngle={true}
                angle={this.props.angle}
                angleCenter={{x: 0.5, y: 0.5}}
                style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                }}
            >
                <Input placeholder={'NAME'} plcolor={'black'} size={20}/>
                <Input placeholder={'USERNAME'} plcolor={'black'} size={20}/>
                <Input placeholder={'PASSWORD'} plcolor={'black'} size={20}/>
                <View
                    style={{
                        width: 100,
                        alignSelf: 'center',
                        alignContent: 'center',
                        marginTop: 10,
                    }}
                >
                    <Button title='Submit' color='orange'/>
                </View>
            </LinearGradient>
        );
    }
}

export default Signup;