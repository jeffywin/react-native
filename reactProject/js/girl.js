/**
 * Created by jeffywin on 2018/4/26.
 */

import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import NavigationBar from './NavigatorBar'

export default class Girl extends React.Component {
    constructor(props) {
      super(props)
    }
    renderButton(image) {
      return <TouchableOpacity
        onPress={() => {
          this.props.navigator.pop()
        }}
      >
        <Image style={{height: 22, width: 22, margin: 5}} source={image}></Image>
      </TouchableOpacity>
    }

    render() {
      return(
        <View style={styles.container}>
          <NavigationBar
            title='Girl'
            statusBar={{backgroundColor:'red'}}
            leftButton={
              this.renderButton(require('../res/images/ic_arrow_back_white_36pt.png'))
            }
            rightButton={
              this.renderButton(require('../res/images/ic_star.png'))
            }
          />
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
    backgroundColor: '#f9f9f9'
  }
})