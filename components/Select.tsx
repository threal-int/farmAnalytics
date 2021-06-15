import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
	placeholder: string;
	value: (value: string) => void;
	items: string[];
}

function Select({ placeholder, value, items }: Props) {
	const [pickerValue, setPickerValue] = useState('');

	const changeHandler = (pickerValue: string) => {
		setPickerValue(pickerValue);
	};

	useEffect(() => {
		value(pickerValue);
	}, [pickerValue]);

	return (
		<View style={styles.view}>
			<View style={styles.picker}>
				<Picker selectedValue={pickerValue} onValueChange={changeHandler}>
					<Picker.Item label={placeholder} value={''} />
					{items.map((item, index) => (
						<Picker.Item key={index} label={item} value={item} />
					))}
				</Picker>
			</View>
		</View>
	);
}

export default Select;

const styles = StyleSheet.create({
	view: { flexDirection: 'row' },
	picker: {
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
