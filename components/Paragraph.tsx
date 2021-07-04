import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colours from '../theme/colours';

const { BLACK, GREY } = colours;

interface Props {
	children: string;
	type: 'header' | 'regular' | 'placeholder';
}

function Paragraph({ children, type }: Props) {
	return (
		<View style={styles.view}>
			<Text
				style={
					type === 'header'
						? styles.header
						: type === 'placeholder'
						? styles.placeholder
						: styles.regular
				}
			>
				{children}
			</Text>
		</View>
	);
}

export default Paragraph;

const styles = StyleSheet.create({
	view: {
		marginRight: 4,
	},
	header: {
		fontSize: 18,
		lineHeight: 27,
		fontFamily: 'Poppins_600SemiBold',
		color: BLACK,
	},
	regular: {
		color: BLACK,
		fontFamily: 'Poppins_400Regular',
		lineHeight: 23.86,
		fontSize: 13,
	},
	placeholder: {
		color: GREY,
		fontFamily: 'Poppins_400Regular',
		lineHeight: 23.86,
		fontSize: 13,
	},
});
