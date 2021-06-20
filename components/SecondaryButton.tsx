import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colours from '../theme/colours';

const { SECONDARY, WHITE } = colours;

interface Props {
	value: string;
	onPress: () => void;
}

function SecondaryButton({ value, onPress }: Props) {
	return (
		<View style={styles.view}>
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Text style={styles.text}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default SecondaryButton;

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	text: {
		color: WHITE,
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		lineHeight: 27,
	},
	button: {
		flex: 1,
		backgroundColor: SECONDARY,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
