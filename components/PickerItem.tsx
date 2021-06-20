import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Paragraph from './Paragraph';

interface Props {
	item: string;
	value: (value: string) => void;
}

function PickerItem({ item, value }: Props) {
	const onPress = () => {
		value(item);
	};

	return (
		<View style={styles.view}>
			<TouchableOpacity style={styles.item} onPress={onPress}>
				<Paragraph type="regular">{item}</Paragraph>
			</TouchableOpacity>
		</View>
	);
}

export default PickerItem;
const styles = StyleSheet.create({
	view: {
		flex: 1,
	},
	item: {
		padding: 12,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 15,
		backgroundColor: '#eee',
	},
});
