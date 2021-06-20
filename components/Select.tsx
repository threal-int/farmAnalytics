import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colours from '../theme/colours';

const { WHITE, GREY } = colours;

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
				<Picker
					selectedValue={pickerValue}
					onValueChange={changeHandler}
					prompt={placeholder}
					dropdownIconColor={GREY}
				>
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
		backgroundColor: WHITE,
		borderRadius: 100,
		color: GREY,
		fontSize: 13,
		fontFamily: 'Poppins_400Regular',
		lineHeight: 19.5,
		paddingLeft: 6,
		justifyContent: 'center',
	},
});
