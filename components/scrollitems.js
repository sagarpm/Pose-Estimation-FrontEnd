import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import CardRow from './cardrow';

class ScrollItems extends Component
{
    render()
    {
        return(
            <ScrollView>
                    <CardRow activities={['Yoga','Push-Ups']} margintop={0} paddingbottom={0}/>
                    <CardRow activities={['Running','HandStand']} margintop={60} paddingbottom={0}/>
                    <CardRow activities={['ShavAsana', 'Pull-Ups']} margintop={60} paddingbottom={20}/>
            </ScrollView>
        );     
    }
}

export default ScrollItems;