import React, {Component} from 'react';
import {View} from 'react-native';
import CardStack from './card';

class CardRow extends Component
{
    render(props)
    {
        return(
            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: this.props.margintop, paddingBottom: this.props.paddingbottom}}>
                <CardStack activity={this.props.activities[0]}/>
                <CardStack activity={this.props.activities[1]}/>
            </View>
        );
    }
}

export default CardRow;