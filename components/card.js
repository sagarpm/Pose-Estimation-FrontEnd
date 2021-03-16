import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class CardStack extends Component
{
    render(props)
    {
        return(
            <TouchableOpacity>
                <View style={{
                    height: 260,
                    width: 180,
                    borderRadius: 20,
                    borderWidth: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#16a085'
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white'
                        }}>
                            {this.props.activity}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CardStack;