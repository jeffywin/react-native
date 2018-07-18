import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';

  export default class ViewUtils {
      static getLeftButton(callback) {//导航栏左部按钮
          return <TouchableOpacity
                  onPress={callback}
                >
                  <Image style={{height: 22, width: 22, margin: 5}} source={require('../../res/images/ic_arrow_back_white_36pt.png')}></Image>
                </TouchableOpacity>
      }
  }