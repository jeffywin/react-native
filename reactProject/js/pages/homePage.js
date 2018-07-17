/**
 * Created by jeffywin on 2018/6/7.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import PopularPage from './popularPage'
import Mine from './mine'
import TabNavigator from 'react-native-tab-navigator'

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
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196f3'}]} source={require('../../res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <PopularPage />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('../../res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
          <View style={styles.page2}></View>
        </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favourite'}
              title="收藏"
              renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('../../res/images/ic_favorite.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_favourite' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              title="我的"
              renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#ccc'}]} source={require('../../res/images/ic_my.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            {/* <View style={styles.page2}></View> */}
            <Mine {...this.props}/> 
            {/* 子页面this.porps.navigator跳转错误，需传入this.props */}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
  },
  image: {
    height: 20,
    width: 20,
  }
});
