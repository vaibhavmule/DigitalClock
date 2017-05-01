import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		color: '#999999',
		fontSize: 150,
    fontFamily: 'DS-Digital',
	}
})

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment().format("LT"),
		};
	}

  componentDidMount() {
    setTimeout(() => {
			this.setState({
				time: moment().format("LT"),
			});
		}, 1000);
  }

	render() {
		return (
			<View style={styles.container}>
				<StatusBar style={{backgroundColor: 'transparent'}} />
				<Text style={styles.timeText}>
					{this.state.time}
				</Text>
				<KeepAwake />
			</View>
		)
	}
}
