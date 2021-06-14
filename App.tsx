import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import Login from './screens/LoginOrCreateFarm';
import Splash from './screens/Splash';
import Register from './screens/Register';
import CreateFarm from './screens/CreateFarm';
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
			{/* <StatusBar style="auto" /> */}
			{/* <Splash /> */}
			{/* <Login /> */}
			{/* <Register /> */}
			<LoginOrCreateFarm type="createFarm" />
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: '#eee',
	},
});
