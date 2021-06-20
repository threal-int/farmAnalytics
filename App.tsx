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

const { BACKGROUND } = colours;

//components
import Splash from './screens/Splash';
import RegisterOrCreateCattle from './screens/RegisterOrCreateCattle';
import LoginOrCreateFarm from './screens/LoginOrCreateFarm';

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.app}>
			<StatusBar style="dark" backgroundColor={BACKGROUND} animated />
			{/* <Splash /> */}
			<LoginOrCreateFarm type="createFarm" />
			{/* <RegisterOrCreateCattle type="createCattle" /> */}
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
