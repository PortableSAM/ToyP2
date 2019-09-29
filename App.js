import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Loaction from 'expo-location';

export default class extends React.Component {
	state = {
		isLoading: true,
	};
	getLocation = async () => {
		try {
			await Loaction.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Loaction.getCurrentPositionAsync();
			this.setState({ isLoading: false });
		} catch (error) {
			Alert.alert("Can't find you.", 'So sad');
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : null;
	}
}
