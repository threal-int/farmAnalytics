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
import CreateFarmSvg from '../components/svg/CreateFarmSvg';

interface Props {
	type: 'login' | 'createFarm';
}

function LoginOrCreateFarm({ type }: Props) {
	const [emailOrFarmName, setEmailOrFarmName] = useState('');
	const [passwordOrFarmingType, setPasswordOrFarmingType] = useState('');

	const onSubmit = () => {
		type === 'login'
			? alert(`email:${emailOrFarmName} && password:${passwordOrFarmingType}`)
			: alert(
					`farmName:${emailOrFarmName} && farmingType:${passwordOrFarmingType}`
			  );
	};

	return (
		<KeyboardWrapper>
			<View style={styles.view}>
				<TopShape />
				<Container>
					<Paragraph type="header">
						{type === 'login' ? 'Welcome Back!' : 'Create your farm?'}
					</Paragraph>
					{type === 'login' ? <LoginSvg /> : <CreateFarmSvg />}
					<Input
						placeholder={
							type === 'login' ? 'Enter your email' : ' Enter the farm name'
						}
						value={(emailOrFarmName) => setEmailOrFarmName(emailOrFarmName)}
					/>
					<Input
						placeholder={
							type === 'login'
								? 'Enter your password'
								: 'Choose type of farming'
						}
						value={(passwordOrFarmingType) =>
							setPasswordOrFarmingType(passwordOrFarmingType)
						}
					/>
					<Paragraph type="link">
						{type === 'login' ? 'Forgot password?' : 'Go back?'}
					</Paragraph>
					<PrimaryButton
						value={type === 'login' ? 'Login' : 'Create'}
						onPress={onSubmit}
					/>
					{type === 'login' && (
						<Paragraph type="regular">
							Don't have an account? <Paragraph type="link">Sign up</Paragraph>
						</Paragraph>
					)}
				</Container>
			</View>
		</KeyboardWrapper>
	);
}

export default LoginOrCreateFarm;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	},
});
