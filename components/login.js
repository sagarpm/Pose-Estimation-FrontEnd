import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Input from './input';

class Login extends Component
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
                <Input placeholder={'USERNAME'} plcolor={'black'} size={20}/>
                <Input placeholder={'PASSWORD'} plcolor={'black'} size={20}/>
            </LinearGradient>
        );
    }
}

export default Login;