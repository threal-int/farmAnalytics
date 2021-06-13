import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface Props {
	value: string;
	onPress: () => void;
}

function PrimaryButton({ value, onPress }: Props) {
	return (
		<View style={styles.view}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Text style={styles.text}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	text: {
		color: '#fff',
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		lineHeight: 27,
	},
	button: {
		flex: 1,
		backgroundColor: '#b41111',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
