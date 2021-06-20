import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import colours from '../theme/colours';

const { BLACK, SECONDARY, GREY } = colours;

interface Props {
	children: ReactNode;
	type: 'header' | 'regular' | 'link' | 'placeholder';
}

function Paragraph({ children, type }: Props) {
	return (
		<Text
			style={
				type === 'header'
					? styles.header
					: type === 'link'
					? styles.link
					: type === 'placeholder'
					? styles.placeholder
					: styles.regular
			}
		>
			{children}
		</Text>
	);
}

export default Paragraph;

const styles = StyleSheet.create({
	header: {
		fontSize: 18,
		lineHeight: 27,
		fontFamily: 'Poppins_600SemiBold',
		color: BLACK,
	},
	link: {
		color: SECONDARY,
		fontFamily: 'Poppins_700Bold',
		lineHeight: 23.86,
		fontSize: 13,
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
