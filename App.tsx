import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import colours from './theme/colours';
const { BACKGROUND, WHITE } = colours;

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import Splash from './screens/Splash';
import RegisterOrCreateCattle from './screens/RegisterOrCreateCattle';
import LoginOrCreateFarm from './screens/LoginOrCreateFarm';
import TopShape from './components/svg/TopShape';

type RootStackParamList = {
	Splash: undefined;
	Register: undefined;
	Login: undefined;
};

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const RootStack = createStackNavigator<RootStackParamList>();

	return (
		<View style={styles.app}>
			<NavigationContainer>
				<StatusBar backgroundColor={BACKGROUND} animated />
				<RootStack.Navigator
					initialRouteName="Splash"
					screenOptions={{
						headerTitle: '',
						headerTintColor: WHITE,
						headerBackground: () => <TopShape />,
					}}
				>
					<RootStack.Screen
						name="Splash"
						component={Splash}
						options={{ headerTransparent: true }}
					/>
					<RootStack.Screen name="Register">
						{(props) => <RegisterOrCreateCattle {...props} type="register" />}
					</RootStack.Screen>
					<RootStack.Screen name="Login">
						{(props) => <LoginOrCreateFarm {...props} type="login" />}
					</RootStack.Screen>
				</RootStack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: BACKGROUND,
		marginTop: Constants.statusBarHeight,
	},
});
