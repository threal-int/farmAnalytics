import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

//components
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import TopShape from '../components/svg/TopShape';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';

function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [location, setLocation] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onSubmit = () => {
		alert(
			`username:${username} && email:${email} && phoneNumber:${phoneNumber} && location:${location} && password:${password} && confirmPassword:${confirmPassword}`
		);
	};

	return (
		<KeyboardWrapper>
			<View style={styles.view}>
				<TopShape />
				<Container>
					<Paragraph type="header">Sign up to get started!</Paragraph>

					<Input
						placeholder="Enter your username"
						value={(username) => setUsername(username)}
					/>
					<Input
						placeholder="Enter your email"
						value={(email) => setEmail(email)}
					/>
					<Input
						placeholder=" Enter your phone number"
						value={(phoneNumber) => setPhoneNumber(phoneNumber)}
					/>
					<Input
						placeholder="Choose your location"
						value={(location) => setLocation(location)}
					/>
					<Input
						placeholder=" Enter your password"
						value={(password) => setPassword(password)}
					/>
					<Input
						placeholder="Confirm your password"
						value={(password) => setConfirmPassword(password)}
					/>

					<PrimaryButton value="Register" onPress={onSubmit} />
					<Paragraph type="regular">
						Already have an account? <Paragraph type="link">Sign in</Paragraph>
					</Paragraph>
				</Container>
			</View>
		</KeyboardWrapper>
	);
}

export default Register;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	},
});
