import React, { useState, useEffect } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Modal,
	FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colours from '../theme/colours';

const { WHITE, GREY } = colours;

import Paragraph from './Paragraph';
import PickerItem from './PickerItem';

interface Props {
	placeholder: string;
	items: string[];
	value: (selectedValue: string) => void;
}

function Picker({ placeholder, items, value }: Props) {
	const [selectedValue, setSelectedValue] = useState('');
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		value(selectedValue);
	}, [selectedValue]);

	return (
		<View style={styles.view}>
			<TouchableOpacity
				style={styles.input}
				onPress={() => setModalVisible(true)}
				// onPressOut={() => setModalVisible(false)}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingRight: 13,
					}}
				>
					<Paragraph type={selectedValue === '' ? 'placeholder' : 'regular'}>
						{selectedValue === '' ? placeholder : selectedValue}
					</Paragraph>
					<Feather name="chevron-down" size={24} color={GREY} />
				</View>
			</TouchableOpacity>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
					<View style={styles.modalContainer}>
						<View style={styles.modal}>
							<FlatList
								data={items}
								renderItem={({ item }) => (
									<PickerItem
										item={item}
										value={(selectedValue) => {
											setSelectedValue(selectedValue);
											setModalVisible(false);
										}}
									/>
								)}
								keyExtractor={(item, index) => `${item}-${index}`}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
}

export default Picker;
const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modal: {
		backgroundColor: WHITE,
		borderRadius: 15,
		elevation: 5,
		paddingVertical: 8,
		width: 310,
	},
	input: {
		flex: 1,
		height: 36,
		backgroundColor: WHITE,
		borderRadius: 100,
		paddingLeft: 13,
		justifyContent: 'center',
	},
});
