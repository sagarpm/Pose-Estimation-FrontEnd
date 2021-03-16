import React, {Component} from 'react';
import Login from './login';
import NavBar from './navbar';

class NavigateLogIn extends Component
{
    render(props)
    {
        return(
            <>
                <NavBar color='#fc7703' text='LOG-IN' navigation={this.props.navigation}/>
                <Login colors={['#0093E9', '#80D0C7']} locations={[0.4, 0.75]}/>
            </>
        );
    }
}

export default NavigateLogIn;