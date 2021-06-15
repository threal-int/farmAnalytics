import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';

//components
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import TopShape from '../components/svg/TopShape';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import Select from '../components/Select';

interface Props {
	type: 'register' | 'createCattle';
}

interface Register {
	username: string;
	email: string;
	phoneNumber: string;
	location: string;
	password: string;
	confirmPassword: string;
}

interface CreateCattle {
	cattleName: string;
	cattleBreed: string;
	cattleDOB: string;
	cattleGender: string;
	cattleWeight: string;
	cattlePurchasePrice: string;
}

interface State {
	register: Register;
	createCattle: CreateCattle;
}

type Action = {
	type: number;
	payload: string;
};

enum Actions {
	SET_USERNAME,
	SET_EMAIL,
	SET_PHONE_NUMBER,
	SET_LOCATION,
	SET_PASSWORD,
	SET_CONFIRM_PASSWORD,
	SET_CATTLE_NAME,
	SET_CATTLE_BREED,
	SET_CATTLE_DOB,
	SET_CATTLE_GENDER,
	SET_CATTLE_WEIGHT,
	SET_CATTLE_PURCHASE_PRICE,
}

const initialState = {
	register: {
		username: '',
		email: '',
		phoneNumber: '',
		location: '',
		password: '',
		confirmPassword: '',
	},
	createCattle: {
		cattleName: '',
		cattleBreed: '',
		cattleDOB: '',
		cattleGender: '',
		cattleWeight: '',
		cattlePurchasePrice: '',
	},
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case Actions.SET_USERNAME:
			return {
				...state,
				register: { ...state.register, username: action.payload },
			};
		case Actions.SET_EMAIL:
			return {
				...state,
				register: { ...state.register, email: action.payload },
			};
		case Actions.SET_PHONE_NUMBER:
			return {
				...state,
				register: { ...state.register, phoneNumber: action.payload },
			};
		case Actions.SET_LOCATION:
			return {
				...state,
				register: { ...state.register, location: action.payload },
			};
		case Actions.SET_PASSWORD:
			return {
				...state,
				register: { ...state.register, password: action.payload },
			};
		case Actions.SET_CONFIRM_PASSWORD:
			return {
				...state,
				register: { ...state.register, confirmPassword: action.payload },
			};
		case Actions.SET_CATTLE_NAME:
			return {
				...state,
				createCattle: { ...state.createCattle, cattleName: action.payload },
			};
		case Actions.SET_CATTLE_BREED:
			return {
				...state,
				createCattle: { ...state.createCattle, cattleBreed: action.payload },
			};
		case Actions.SET_CATTLE_DOB:
			return {
				...state,
				createCattle: { ...state.createCattle, cattleDOB: action.payload },
			};
		case Actions.SET_CATTLE_GENDER:
			return {
				...state,
				createCattle: { ...state.createCattle, cattleGender: action.payload },
			};
		case Actions.SET_CATTLE_WEIGHT:
			return {
				...state,
				createCattle: { ...state.createCattle, cattleWeight: action.payload },
			};
		case Actions.SET_CATTLE_PURCHASE_PRICE:
			return {
				...state,
				createCattle: {
					...state.createCattle,
					cattlePurchasePrice: action.payload,
				},
			};
		default:
			return state;
	}
}

function Register({ type }: Props) {
	const [
		{
			register: {
				username,
				email,
				phoneNumber,
				location,
				password,
				confirmPassword,
			},
			createCattle: {
				cattleName,
				cattleBreed,
				cattleDOB,
				cattleGender,
				cattleWeight,
				cattlePurchasePrice,
			},
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const onSubmit = () => {
		type === 'register'
			? alert(
					`username:${username} && email:${email} && phoneNumber:${phoneNumber} && location:${location} && password:${password} && confirmPassword:${confirmPassword}`
			  )
			: alert(
					`CattleName:${cattleName} && CattleBreed:${cattleBreed} && CattleDOB:${cattleDOB} && CattleGender:${cattleGender} && CattleWeight:${cattleWeight} && cattlePurchasePrice:${cattlePurchasePrice}`
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
						value={
							type === 'register'
								? (username) =>
										dispatch({
											type: Actions.SET_USERNAME,
											payload: username,
										})
								: (cattleName) =>
										dispatch({
											type: Actions.SET_CATTLE_NAME,
											payload: cattleName,
										})
						}
					/>
					<Input
						placeholder={
							type === 'register' ? 'Enter your email' : 'Enter cattle breed'
						}
						value={
							type === 'register'
								? (email) =>
										dispatch({ type: Actions.SET_EMAIL, payload: email })
								: (cattleBreed) =>
										dispatch({
											type: Actions.SET_CATTLE_BREED,
											payload: cattleBreed,
										})
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Enter your phone number'
								: 'Choose cattle date of birth'
						}
						value={
							type === 'register'
								? (phoneNumber) =>
										dispatch({
											type: Actions.SET_PHONE_NUMBER,
											payload: phoneNumber,
										})
								: (cattleDOB) =>
										dispatch({
											type: Actions.SET_CATTLE_DOB,
											payload: cattleDOB,
										})
						}
					/>

					<Select
						placeholder={
							type === 'register'
								? 'Choose your location'
								: 'Choose cattle gender'
						}
						items={
							type === 'register'
								? ['Uasin Gishu', 'Nairobi']
								: ['Male', 'Female']
						}
						value={
							type === 'register'
								? (location) =>
										dispatch({
											type: Actions.SET_LOCATION,
											payload: location,
										})
								: (cattleGender) =>
										dispatch({
											type: Actions.SET_CATTLE_GENDER,
											payload: cattleGender,
										})
						}
					/>

					<Input
						placeholder={
							type === 'register'
								? 'Enter your password'
								: 'Enter cattle weight'
						}
						value={
							type === 'register'
								? (password) =>
										dispatch({
											type: Actions.SET_PASSWORD,
											payload: password,
										})
								: (cattleWeight) =>
										dispatch({
											type: Actions.SET_CATTLE_WEIGHT,
											payload: cattleWeight,
										})
						}
					/>
					<Input
						placeholder={
							type === 'register'
								? 'Confirm your password'
								: 'Enter cattle purchase price'
						}
						value={
							type === 'register'
								? (confirmPassword) =>
										dispatch({
											type: Actions.SET_CONFIRM_PASSWORD,
											payload: confirmPassword,
										})
								: (cattlePurchasePrice) =>
										dispatch({
											type: Actions.SET_CATTLE_PURCHASE_PRICE,
											payload: cattlePurchasePrice,
										})
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
