/**
 * Created by jeffywin on 2018/6/7.
 */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavigationBar from '../../NavigatorBar'

export default class CustomKey extends React.Component {
	render() {
		return(
			<View style={styles.container}>
			<NavigationBar
        title='自定义标签'
        statusBar={{backgroundColor:'#2196f3'}}
      />
				<Text>自定义标签页</Text>
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