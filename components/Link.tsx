import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colours from '../theme/colours';

const { SECONDARY } = colours;

interface Props {
	children: string;
	onPress: () => void;
}

function Link({ children, onPress }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.link}>{children}</Text>
		</TouchableOpacity>
	);
}

export default Link;
const styles = StyleSheet.create({
	link: {
		color: SECONDARY,
		fontFamily: 'Poppins_700Bold',
		lineHeight: 23.86,
		fontSize: 13,
	},
});
