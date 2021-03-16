import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

class Input extends Component
{
	render()
	{
		return(
			<View style={styles.input_box}>
				<TextInput
					placeholder={this.props.placeholder}
					placeholderTextColor={this.props.plcolor}
					style={{
						fontSize : this.props.size
					}}
				/>
			</View>
		);
	}
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
	}
})

export default Input;