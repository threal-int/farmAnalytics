import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import SplashShape from '../components/svg/SplashShape';
import SplashSvg from '../components/svg/SplashSvg';

function Splash({ navigation }: any) {
	return (
		<View style={styles.view}>
			<View style={styles.svg}>
				<SplashShape />
				<SplashSvg />
			</View>

			<View style={styles.container}>
				<Text style={styles.headerText}>Why farm Analytics?</Text>
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					egestas ut suspendisse vitae mauris egestas luctus pretium bibendum.
					In diam etiam habitasse mattis.
				</Text>
				<SecondaryButton
					value="Get Started"
					onPress={() => navigation.navigate('Register')}
				/>
			</View>
		</View>
	);
}

export default Splash;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	},
	svg: {
		position: 'relative',
	},
	container: {
		flex: 1,
		maxWidth: 310,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	headerText: {
		fontSize: 18,
		lineHeight: 27,
		fontFamily: 'Poppins_600SemiBold',
		color: '#000',
	},
	text: {
		color: '#000',
		fontFamily: 'Poppins_400Regular',
		lineHeight: 23.86,
		fontSize: 13,
		textAlign: 'center',
	},
	shape: {
		position: 'relative',
	},
});
