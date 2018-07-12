import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ResCell extends Component {
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{this.props.data.full_name}</Text>
          <Text style={styles.desc}>{this.props.data.description}</Text>
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
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
	wrapper: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: 'gray',//ios
    shadowOffset: {width:2,height:1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2, //android
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  author:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    fontSize: 14,
    marginBottom: 3,
    color: '#757575',
    borderRadius: 2,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})