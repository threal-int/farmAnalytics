import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colours from '../theme/colours';

const { WHITE } = colours;

interface Props {
	placeholder: string;
	value: (value: string) => void;
}

function Input({ placeholder, value }: Props) {
	const [textValue, setTextValue] = useState('');

	const changeHandler = (value: string) => {
		setTextValue(value);
	};

	useEffect(() => {
		value(textValue);
	}, [textValue]);

	return (
		<View style={styles.view}>
			<TextInput
				placeholder={placeholder}
				value={textValue}
				onChangeText={changeHandler}
				style={styles.input}
			/>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		height: 36,
		backgroundColor: WHITE,
		borderRadius: 100,
		fontSize: 13,
		fontFamily: 'Poppins_400Regular',
		lineHeight: 19.5,
		paddingLeft: 13,
	},
});
