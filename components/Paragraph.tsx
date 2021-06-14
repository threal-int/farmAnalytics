import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
	children: ReactNode;
	type: 'header' | 'regular' | 'link';
}

function Paragraph({ children, type }: Props) {
	return (
		<Text
			style={
				type === 'header'
					? styles.header
					: type === 'link'
					? styles.link
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
		color: '#000',
	},
	link: {
		color: '#b41111',
		fontFamily: 'Poppins_700Bold',
		lineHeight: 23.86,
		fontSize: 13,
	},
	regular: {
		color: '#000',
		fontFamily: 'Poppins_400Regular',
		lineHeight: 23.86,
		fontSize: 13,
	},
});
