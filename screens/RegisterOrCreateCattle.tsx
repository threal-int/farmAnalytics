import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

//components
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import TopShape from '../components/svg/TopShape';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';

interface Props {
	type: 'register' | 'createCattle';
}

function Register({ type }: Props) {
	const [usernameOrCattleName, setUsernameOrCattleName] = useState('');
	const [emailOrCattleBreed, setEmailOrCattleBreed] = useState('');
	const [phoneNumberOrCattleDOB, setPhoneNumberOrCattleDOB] = useState('');
	const [locationOrCattleGender, setLocationOrCattleGender] = useState('');
	const [passwordOrCattleWeight, setPasswordOrCattleWeight] = useState('');
	const [confirmPasswordOrPurchasePrice, setConfirmPasswordOrPurchasePrice] =
		useState('');

	const onSubmit = () => {
		type === 'register'
			? alert(
					`username:${usernameOrCattleName} && email:${emailOrCattleBreed} && phoneNumber:${phoneNumberOrCattleDOB} && location:${locationOrCattleGender} && password:${passwordOrCattleWeight} && confirmPassword:${confirmPasswordOrPurchasePrice}`
			  )
			: alert(
					`CattleName:${usernameOrCattleName} && CattleBreed:${emailOrCattleBreed} && CattleDOB:${phoneNumberOrCattleDOB} && CattleGender:${locationOrCattleGender} && CattleWeight:${passwordOrCattleWeight} && PurchasePrice:${confirmPasswordOrPurchasePrice}`
			  );
	};

	return (
		<KeyboardWrapper>
			<View style={styles.view}>
				<TopShape />
				<Container>
					<Paragraph type="header">
						{type === 'register' ? 'Sign up to get started!' : 'Create Cattle?'}
					</Paragraph>

					<Input
						placeholder={
							type === 'register' ? 'Enter your username' : 'Enter cattle name'
						}
						value={(usernameOrCattleName) =>
							setUsernameOrCattleName(usernameOrCattleName)
						}
					/>
					<Input
						placeholder={
							type === 'register' ? 'Enter your email' : 'Enter cattle breed'
						}
						value={(emailOrCattleBreed) =>
							setEmailOrCattleBreed(emailOrCattleBreed)
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Enter your phone number'
								: 'Choose cattle date of birth'
						}
						value={(phoneNumberOrCattleDOB) =>
							setPhoneNumberOrCattleDOB(phoneNumberOrCattleDOB)
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Choose your location'
								: ' Choose cattle gender'
						}
						value={(locationOrCattleGender) =>
							setLocationOrCattleGender(locationOrCattleGender)
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Enter your password'
								: 'Enter cattle weight'
						}
						value={(passwordOrCattleWeight) =>
							setPasswordOrCattleWeight(passwordOrCattleWeight)
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Confirm your password'
								: 'Enter cattle purchase price'
						}
						value={(confirmPasswordOrPurchasePrice) =>
							setConfirmPasswordOrPurchasePrice(confirmPasswordOrPurchasePrice)
						}
					/>

					<PrimaryButton
						value={type === 'register' ? 'Register' : 'Create'}
						onPress={onSubmit}
					/>
					<Paragraph type="regular">
						{type === 'register' && 'Already have an account?'}{' '}
						<Paragraph type="link">
							{type === 'register' ? 'Sign in' : 'Go back?'}
						</Paragraph>
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
