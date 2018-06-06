/**
 * Created by jeffywin on 2018/6/6.
 */
import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import NavigationBar from './NavigatorBar'

export default class Boy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: ''
    }
  }

  getData(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          result: JSON.stringify(result)
        })
      })
      .catch(error => {
        this.setState({
          result: JSON.stringify(error)
        })
      })
  }
  render() {
    return(
      <View style={styles.container}>
        <NavigationBar
          title='fetchTest'
          statusBar={{backgroundColor:'red'}}
        />
        <Text
          onPress={() => {this.getData('http://rapapi.org/mockjsdata/34682/getData')}}
        >获取数据</Text>
        <Text>返回数据:{this.state.result}</Text>
        <Text>发送数据</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
