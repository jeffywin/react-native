/**
 * Created by jeffywin on 2018/6/7.
 */
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import NavigationBar from '../../NavigatorBar'
import CustromKey from './customKey.js'

export default class Mine extends React.Component {
	render() {
		return(
			<View style={styles.container}>
			<NavigationBar
        title='我的'
        statusBar={{backgroundColor:'#2196f3'}}
      />
				<Text
            onPress={() => {
              this.props.navigator.push({
                component: CustromKey,
                params: {
                  ...this.props
                }
              })
              }
            }
          >前往自定义标签页</Text>
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