import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';

//navigation
import { StackNavigationProp } from '@react-navigation/stack';

//components
import SecondaryButton from '../components/SecondaryButton';
import Input from '../components/Input';
import LoginSvg from '../components/svg/LoginSvg';
import KeyboardWrapper from '../components/KeyboardWrapper';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import CreateFarmSvg from '../components/svg/CreateFarmSvg';
import Picker from '../components/Picker';
import FormFooter from '../components/FormFooter';
import Link from '../components/Link';

type RootStackParamList = {
	Splash: undefined;
	Register: undefined;
	Login: undefined;
};

type screenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
	type: 'login' | 'createFarm';
	navigation: screenNavigationProp;
}

interface Login {
	email: string;
	password: string;
}

interface CreateFarm {
	farmName: string;
	farmingType: string;
}

interface State {
	login: Login;
	createFarm: CreateFarm;
}

enum Actions {
	SET_EMAIL,
	SET_PASSWORD,
	SET_FARM_NAME,
	SET_FARMING_TYPE,
}

type Action = {
	type: number;
	payload: string;
};

type items = ['Livestock', 'Crop', 'Mixed'];

const initialState = {
	login: {
		email: '',
		password: '',
	},
	createFarm: {
		farmName: '',
		farmingType: '',
	},
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case Actions.SET_EMAIL:
			return { ...state, login: { ...state.login, email: action.payload } };
		case Actions.SET_PASSWORD:
			return { ...state, login: { ...state.login, password: action.payload } };
		case Actions.SET_FARM_NAME:
			return {
				...state,
				createFarm: { ...state.createFarm, farmName: action.payload },
			};
		case Actions.SET_FARMING_TYPE:
			return {
				...state,
				createFarm: { ...state.createFarm, farmingType: action.payload },
			};
		default:
			return state;
	}
}

function LoginOrCreateFarm({ type, navigation }: Props) {
	const [
		{
			login: { email, password },
			createFarm: { farmName, farmingType },
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const onSubmit = () => {
		type === 'login'
			? alert(`email:${email} && password:${password}`)
			: alert(`farmName:${farmName} && farmingType:${farmingType}`);
	};

	const items: items = ['Livestock', 'Crop', 'Mixed'];

	return (
		<KeyboardWrapper>
			<View style={styles.view}>
				<Container>
					<Paragraph type="header">
						{type === 'login' ? 'Welcome Back!' : 'Create your farm?'}
					</Paragraph>
					{type === 'login' ? <LoginSvg /> : <CreateFarmSvg />}
					<Input
						placeholder={
							type === 'login' ? 'Enter your email' : ' Enter the farm name'
						}
						value={
							type === 'login'
								? (email) =>
										dispatch({
											type: Actions.SET_EMAIL,
											payload: email,
										})
								: (farmName) =>
										dispatch({
											type: Actions.SET_FARM_NAME,
											payload: farmName,
										})
						}
					/>
					{type === 'login' ? (
						<Input
							placeholder="Enter your password"
							value={(password) =>
								dispatch({
									type: Actions.SET_PASSWORD,
									payload: password,
								})
							}
						/>
					) : (
						<Picker
							placeholder="Choose your farming type"
							items={items}
							value={(farmingType) =>
								dispatch({
									type: Actions.SET_FARMING_TYPE,
									payload: farmingType,
								})
							}
						/>
					)}
					{type === 'login' && (
						<Link onPress={() => alert('inafanya usitense...')}>
							Forgot password?
						</Link>
					)}

					<SecondaryButton
						value={type === 'login' ? 'Login' : 'Create'}
						onPress={onSubmit}
					/>
					<FormFooter
						type={type === 'login' ? 'login' : 'default'}
						pressHandler={() => navigation.goBack()}
					/>
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
