import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import NavigatorBar from '../NavigatorBar'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import DataRespon from '../expand/DataRespository'
const URL = 'https://api.github.com/search/repositories?q='
const QUREY_STR='&sort=stars'

export default class PopularPage extends React.Component {
	constructor(props) {
		super(props);
		this.DataRespon = new DataRespon(),
		this.state={
			result: ''
		}
	}
	onLoad() {
		let url = this.getUrl(this.text)
		this.DataRespon.getFetchRespon(url)
			.then(result=>{
				this.setState({
					result: JSON.stringify(result)
				})
			})
			.catch(error =>{
				this.setState({
					result: JSON.stringify(error)
				})
			})
	}
	getUrl(key) {
		return URL+key+QUREY_STR;
	}
	render() {
		return(
			<View style={styles.container}>
				<NavigatorBar
					title='最热'
					statusBar={{backgroundColor:'red'}}
				/>
				<ScrollableTabView renderTabBar={()=><ScrollableTabBar/>}>
					<Text tabLabel='JAVA'>JAVA</Text>
					<Text tabLabel='IOS'>IOS</Text>
					<Text tabLabel='Android'>Android</Text>
					<Text tabLabel='JavaScript'>JavaScript</Text>
				</ScrollableTabView>
				{/* <Text style={styles.tips} onPress={() => {this.onLoad()}}>获取数据</Text>
				<TextInput
					style={{height:20,borderWidth: 1}}
					onChangeText = {text => this.text = text}
				/>
				<Text style={{height:500,borderWidth: 1,marginTop: 5}}>{this.state.result}</Text> */}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	tips: {
		fontSize: 20
	}
})