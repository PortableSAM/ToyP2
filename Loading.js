import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
	return (
		<View style={styleSheet.container}>
			<Text style={styleSheet.text}>Getting the Fucking Weather</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
		paddingVertical: 100,
		backgroundColor: '#ffeaa7',
	},
	text: {
		color: '#b2bec3',
		fontSize: 50,
	},
});
