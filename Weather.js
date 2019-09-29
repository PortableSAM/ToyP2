import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning-rainy',
		gradient: ['#606c88', '#3f4c6b'],
		title: 'Thunderstorm',
		subtitle: 'just not go out there',
	},
	Drizzle: {
		iconName: 'weather-hai',
		gradient: ['#5D4157', '#A8CABA'],
		title: 'Drizzle',
		subtitle: 'in need of an umbrella',
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: ['#616161', '#9bc5c3'],
		title: 'Rain',
		subtitle: 'You need an umbrella now',
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: ['#283048', '#859398'],
		title: 'Snow',
		subtitle: 'Maybe need an umbrella',
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#FFC837', '#FF8008'],
		title: 'Sunny',
		subtitle: 'fucking sunny',
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#1F1C2C', '#928DAB'],
		title: 'Clouds',
		subtitle: 'be gloomy....',
	},
	Haze: {
		iconName: 'weather-fog',
		gradient: ['#757F9A', '#D7DDE8'],
		title: 'Haze',
		subtitle: 'Damn it, haze.',
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#E7E9BB', '#403B4A'],
		title: 'Mist',
		subtitle: 'Damn it, mist.',
	},
	Dust: {
		iconName: 'weather-fog',
		gradient: ['#B79891', '#94716B'],
		title: 'Dust',
		subtitle: 'I am not coming',
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: ['#E6DADA', '#274046'],
		title: 'Fog',
		subtitle: 'I Know, Fucking Fog...',
	},
};
export default function Weather({ temp, condition }) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
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
	title: {
		color: '#b2bec3',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
		textAlign: 'left',
	},
	subtitle: {
		fontWeight: '600',
		color: '#dfe6e9',
		fontSize: 24,
		textAlign: 'left',
	},
	textContainer: {
		alignItems: 'flex-start',
		paddingHorizontal: 40,
		justifyContent: 'center',
		flex: 1,
	},
});
