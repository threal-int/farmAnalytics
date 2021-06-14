import React, { useReducer } from 'react';
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

function LoginOrCreateFarm({ type }: Props) {
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
					<Input
						placeholder={
							type === 'login'
								? 'Enter your password'
								: 'Choose type of farming'
						}
						value={
							type === 'login'
								? (password) =>
										dispatch({
											type: Actions.SET_PASSWORD,
											payload: password,
										})
								: (farmingType) =>
										dispatch({
											type: Actions.SET_FARMING_TYPE,
											payload: farmingType,
										})
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
