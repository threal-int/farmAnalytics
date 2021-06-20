import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import colours from '../theme/colours';

const { WHITE, GREY, BLACK } = colours;

//components
import Paragraph from './Paragraph';

interface Props {
	value: (selectedDate: string) => void;
	placeholder: string;
}

function SelectDateTime({ value, placeholder }: Props) {
	const [show, setShow] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date>();

	const onChange = (event: any, selectedDate: Date | undefined): void => {
		selectedDate && setSelectedDate(selectedDate);
		setShow(false);
	};

	useEffect(() => {
		selectedDate && value(selectedDate?.toUTCString());
	}, [selectedDate]);

	return (
		<View style={styles.view}>
			<TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
				<View style={styles.inputText}>
					<Paragraph type={selectedDate ? 'regular' : 'placeholder'}>
						{selectedDate ? selectedDate.toDateString() : placeholder}
					</Paragraph>
					<Feather name="calendar" size={24} color={GREY} />
				</View>

				{show && (
					<DateTimePicker
						value={new Date()}
						mode={'date'}
						display={'spinner'}
						onChange={onChange}
						maximumDate={new Date()}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
}

export default SelectDateTime;

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		height: 36,
		backgroundColor: WHITE,
		borderRadius: 100,
		paddingLeft: 13,
		justifyContent: 'center',
	},
	inputText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 13,
	},
});
