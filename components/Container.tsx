import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
	children: ReactNode;
}

function Container({ children }: Props) {
	return <View style={styles.Container}>{children}</View>;
}

export default Container;

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		maxWidth: 310,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});
