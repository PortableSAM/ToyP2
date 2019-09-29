import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({ temp }) {
	return (
		<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
			<View style={styles.halfContainer}>
				<StatusBar barStyle="light-content" />
				<MaterialCommunityIcons size={96} name="weather-fog" color="white" />
				<Text style={styles.temp}>
					{temp}
					<MaterialCommunityIcons size={42} name="temperature-celsius" />
				</Text>
			</View>
			<View style={styles.halfContainer} />
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust',
		'Fog',
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		fontSize: 42,
		color: 'white',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
