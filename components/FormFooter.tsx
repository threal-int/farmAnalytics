import React from 'react';
import { View, StyleSheet } from 'react-native';
import Paragraph from './Paragraph';
import Link from './Link';
interface Props {
	type: 'register' | 'login' | 'default';
	pressHandler: () => void;
}

function FormFooter({ type, pressHandler }: Props) {
	return (
		<View style={styles.view}>
			<Paragraph type="regular">
				{type === 'register'
					? 'Already have an account?'
					: type === 'login'
					? `Don't have an account`
					: ''}
			</Paragraph>
			<Link onPress={pressHandler}>
				{type === 'register'
					? 'Sign In'
					: type === 'login'
					? 'Sign Up'
					: 'Go back?'}
			</Link>
		</View>
	);
}

export default FormFooter;
const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		width: 310,
		justifyContent: 'center',
	},
});
