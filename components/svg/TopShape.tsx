import React from 'react';
import Svg, { Path } from 'react-native-svg';
import colours from '../../theme/colours';

const { PRIMARY } = colours;

function TopShape() {
	return (
		<Svg width="360" height="81" viewBox="0 0 360 81" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M360 0H0V65C0 48.4315 13.4315 35 30 35H330C346.569 35 360 48.4315 360 65V0Z"
				fill={PRIMARY}
			/>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M360 9H0V74C0 57.4315 13.4315 44 30 44H330C346.569 44 360 57.4315 360 74V9Z"
				fill={PRIMARY}
				fillOpacity="0.7"
			/>
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M360 16H0V81C0 64.4315 13.4315 51 30 51H330C346.569 51 360 64.4315 360 81V16Z"
				fill={PRIMARY}
				fillOpacity="0.6"
			/>
		</Svg>
	);
}

export default TopShape;
