import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';

//navigation
import { StackNavigationProp } from '@react-navigation/stack';

//components
import SecondaryButton from '../components/SecondaryButton';
import Input from '../components/Input';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import SelectDateTime from '../components/SelectDateTime';
import Picker from '../components/Picker';
import FormFooter from '../components/FormFooter';

type RootStackParamList = {
	Splash: undefined;
	Register: undefined;
	Login: undefined;
};

type screenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
	type: 'register' | 'createCattle';
	navigation: screenNavigationProp;
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

function Register({ type, navigation }: Props) {
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
					{type === 'register' ? (
						<Input
							placeholder="Enter your phone number"
							value={(phoneNumber) =>
								dispatch({
									type: Actions.SET_PHONE_NUMBER,
									payload: phoneNumber,
								})
							}
						/>
					) : (
						<SelectDateTime
							value={(cattleDOB: any) =>
								dispatch({
									type: Actions.SET_CATTLE_DOB,
									payload: cattleDOB,
								})
							}
							placeholder="Choose cattle date of birth"
						/>
					)}

					<Picker
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

					<SecondaryButton
						value={type === 'register' ? 'Register' : 'Create'}
						onPress={onSubmit}
					/>
					<FormFooter
						type={type === 'register' ? 'register' : 'default'}
						pressHandler={() =>
							type === 'register'
								? navigation.navigate('Login')
								: navigation.navigate('Register')
						}
					/>
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
