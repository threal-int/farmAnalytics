import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
			<View style={styles.input}>
				<TextInput
					placeholder={placeholder}
					value={textValue}
					onChangeText={changeHandler}
				/>
			</View>
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
		// fontSize: 13,
		// fontFamily: 'Poppins_400Regular',
		// lineHeight: 19.5,
		paddingLeft: 13,
		justifyContent: 'center',
	},
});
