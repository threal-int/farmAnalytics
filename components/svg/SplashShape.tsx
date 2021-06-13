import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SplashShape() {
	return (
		<Svg width="360" height="269" viewBox="0 0 360 269" fill="none">
			<Path
				d="M0 0H360V145.869C360 201.098 315.228 245.869 260 245.869H0V0Z"
				fill="#44765D"
			/>
			<Path
				d="M0 10.2803H360V156.15C360 211.378 315.228 256.15 260 256.15H0V10.2803Z"
				fill="#44765D"
				fillOpacity="0.7"
			/>
			<Path
				d="M0 23.1306H360V169C360 224.229 315.228 269 260 269H0V23.1306Z"
				fill="#44765D"
				fillOpacity="0.6"
			/>
		</Svg>
	);
}

export default SplashShape;
