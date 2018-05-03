/**
 * Created by jeffywin on 2018/4/26.
 */

import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Girl extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return(
        <View style={styles.container}>
          <Text>我是女孩</Text>
          <Text>{this.props.word}</Text>
          <Text onPress={() => {
            this.props.onBack('一盒巧克力')
            this.props.navigator.pop()
          }}>回赠男孩</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c33',
    justifyContent: 'center'
  }
})