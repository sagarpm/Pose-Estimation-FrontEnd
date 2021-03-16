import React, {Component} from 'react';
import Login from './login';
import NavBar from './navbar';
import Signup from './signup';

class NavigateSignUp extends Component
{
    render(props)
    {
        return(
            <>
                <NavBar color='#fc7703' text='SIGN-UP' navigation={this.props.navigation} iconname={"chevron-left"}/>
                <Signup colors={['#0093E9', '#80D0C7']} locations={[0.4, 0.75]}/>
            </>
        );
    }
}

export default NavigateSignUp;