/**
 * Created by jeffywin on 2018/4/26.
 */
import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Girl from './girl'
import NavigationBar from './NavigatorBar'
import ListViewText from './listView'

export default class Boy extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        word: ''
      }
    }
    render() {
      return(
        <View style={styles.container}>
          <NavigationBar
            title='Boy'
            //statusBar={{backgroundColor:'red'}}
          />
          <ListViewText/>
          {/*<Text>我是男孩</Text>
          <Text
            onPress={() => {
              this.props.navigator.push({
                component: Girl,
                params: {
                  word: '一支玫瑰',
                  onBack: (word) => {
                    this.setState({
                        word: word
                    })
                  }
                }
              })
              }
            }
          >准备像女孩送花</Text>
          <Text>从女孩那收到{this.state.word}</Text>*/}
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