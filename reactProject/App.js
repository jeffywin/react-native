/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Navigator传两个参数,一个initialRoute和renderScene(route,navigator)
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {Navigator} from "react-native-deprecated-custom-components"

import TabNavigator from 'react-native-tab-navigator'
import FetchTest from './js/fetchTest'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'tb_popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
       {/* <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#c33'}]} source={require('./res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
          <View style={styles.page2}></View>
        </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favourite'}
              title="收藏"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('./res/images/ic_favorite.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_favourite' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              title="我的"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('./res/images/ic_my.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>*/}
        <Navigator
          initialRoute={{
            component: FetchTest
          }}
          renderScene={(route, navigator) => {//navigator可选参数，提供从父导航器获得的导航器对象
            let Component = route.component;
            return <Component navigator={navigator} {...route.params}/>
          }}
        >
        </Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: '#c33',
  },
  page2: {
    flex: 1,
    backgroundColor: '#999',
  },
  image: {
    height: 20,
    width: 20,
  }
});
