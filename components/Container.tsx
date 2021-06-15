import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
	children: ReactNode;
}

function Container({ children }: Props) {
	return <View style={styles.container}>{children}</View>;
}

export default Container;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxWidth: 310,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});
