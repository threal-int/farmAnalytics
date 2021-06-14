import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
	children: ReactNode;
}

function KeyboardWrapper({ children }: Props) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			{children}
		</TouchableWithoutFeedback>
	);
}

export default KeyboardWrapper;
