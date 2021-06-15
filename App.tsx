import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

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
			<StatusBar style="dark" backgroundColor="#eee" animated />
			{/* <Splash /> */}
			<LoginOrCreateFarm type="createFarm" />
			{/* <RegisterOrCreateCattle type="createCattle" /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: '#eee',
		marginTop: Constants.statusBarHeight,
	},
});
