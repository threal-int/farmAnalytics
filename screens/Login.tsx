import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

//components
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import LoginSvg from '../components/svg/LoginSvg';
import TopShape from '../components/svg/TopShape';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = () => {
		alert(`email:${email} && password:${password}`);
	};

	return (
		<KeyboardWrapper>
			<View style={styles.view}>
				<TopShape />
				<Container>
					<Paragraph type="header">Welcome Back!</Paragraph>
					<LoginSvg />
					<Input
						placeholder="Enter your email"
						value={(email) => setEmail(email)}
					/>
					<Input
						placeholder="Enter your password"
						value={(password) => setPassword(password)}
					/>
					<Paragraph type="link">Forgot password?</Paragraph>
					<PrimaryButton value="Login" onPress={onSubmit} />
					<Paragraph type="regular">
						Don't have an account? <Paragraph type="link">Sign up</Paragraph>
					</Paragraph>
				</Container>
			</View>
		</KeyboardWrapper>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Login;
