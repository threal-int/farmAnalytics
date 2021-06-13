import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
	placeholder: string;
	value: (inputValue: string) => void;
}

function Input({ placeholder, value }: Props) {
	const [inputValue, setInputValue] = useState('');

	const changeHandler = (inputValue: string) => {
		setInputValue(inputValue);
	};

	useEffect(() => {
		value(inputValue);
	}, [inputValue]);

	return (
		<View style={styles.view}>
			<TextInput
				placeholder={placeholder}
				value={inputValue}
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
		backgroundColor: '#fff',
		borderRadius: 100,
		fontSize: 13,
		fontFamily: 'Poppins_400Regular',
		lineHeight: 19.5,
		paddingLeft: 13,
	},
});
