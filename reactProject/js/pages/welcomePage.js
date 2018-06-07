/**
 * Created by jeffywin on 2018/6/7.
 */
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import NavigationBar from '../NavigatorBar'
import HomePage from './homePage'

export default class welcomePage extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigator.resetTo({
				component: HomePage
			})
		}, 2000)
	}

	render() {
		return(
			<View style={styles.container}>
			<NavigationBar
        title='欢迎页面'
        statusBar={{backgroundColor:'red'}}
      />
				<Text>欢迎页面</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});