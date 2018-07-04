import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import NavigatorBar from '../NavigatorBar'

export default class PopularPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View style={styles.container}>
				<NavigatorBar
					title='最热'
					style={{backgroundColor: '#c33'}}
				/>
				<Text style={styles.tips}>获取数据</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tips: {
		fontSize: 20
	}
})