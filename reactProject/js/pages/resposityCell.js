import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class ResCell extends Component {
  render(){
    return(
      <View style={styles.wrapper}>
        <Text style={styles.title}>{this.props.data.full_name}</Text>
        <Text>{this.props.data.description}</Text>
        <View style={styles.bottom}>
          <View style={styles.author}>
            <Text>Author:</Text>
            <Image 
              style={{height:20, width: 20}}
              source={{uri:this.props.data.owner.avatar_url}}
            />  
          </View>
          <View style={styles.author}>
            <Text>Stars:</Text>
            <Text>{this.props.data.stargazers_count}</Text>  
          </View>
          <Image 
            style={{height:20, width: 20}}
            source={require('../../res/images/ic_star.png')} />  
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	wrapper: {
		margin: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  author:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})