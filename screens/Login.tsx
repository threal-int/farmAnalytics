import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

//components
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import LoginSvg from '../components/svg/LoginSvg';
import TopShape from '../components/svg/TopShape';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = () => {
		alert(`email:${email} && password:${password}`);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.view}>
				<TopShape />
				<View style={styles.container}>
					<Text style={styles.headerText}>Welcome Back!</Text>
					<LoginSvg />
					<Input
						placeholder="Enter your email"
						value={(email) => setEmail(email)}
					/>
					<Input
						placeholder="Enter your password"
						value={(password) => setPassword(password)}
					/>
					<Text style={styles.link}>Forgot password?</Text>
					<PrimaryButton value="Login" onPress={onSubmit} />
					<Text style={styles.text}>
						Don't have an account? <Text style={styles.link}>Sign up</Text>
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		maxWidth: 310,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	headerText: {
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
	text: {
		color: '#000',
		fontFamily: 'Poppins_400Regular',
		lineHeight: 23.86,
		fontSize: 13,
	},
});

export default Login;
