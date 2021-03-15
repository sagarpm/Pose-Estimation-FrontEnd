import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

class Input extends Component
{
	render(props)
	{
		return(
			<TextInput
				placeholder={this.props.placeholder}
				placeholderTextColor={this.props.plcolor}
				style={{
						fontSize: this.props.size,
						borderRadius: 5,
						borderWidth: 3,
						borderColor: 'black',
						marginLeft: 25,
						marginRight: 25,
						marginTop: 10,
						marginBottom: 10,
						paddingLeft: 15,
				}}
			/>
		);
	}
}

export default Input;