//RefreshControl 组件

import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

import NavigationBar from './NavigatorBar'
import Toast,{DURATION} from 'react-native-easy-toast'

var data = {
  "result": [
    {
      "email": "f.lee@taylor.edu",
      "fullName": "张三张三张三张三"
    },
    {
      "email": "g.jackson@hall.net",
      "fullName": "张三张三张三张三张三"
    },
    {
      "email": "l.hall@rodriguez.com",
      "fullName": "张三张三张三张三"
    },
    {
      "email": "q.lopez@davis.io",
      "fullName": "张三张三张三张三"
    },
    {
      "email": "c.gonzalez@perez.net",
      "fullName": "张三张三张三"
    },
    {
      "email": "a.johnson@williams.net",
      "fullName": "张三张三"
    },
    {
      "email": "i.anderson@lopez.edu",
      "fullName": "张三张三"
    },
    {
      "email": "r.lee@davis.org",
      "fullName": "张三张三"
    },
    {
      "email": "o.young@lee.edu",
      "fullName": "张三张三张三张三张三"
    },
    {
      "email": "j.wilson@williams.org",
      "fullName": "张三张三张三张三张三"
    },
    {
      "email": "z.walker@jackson.io",
      "fullName": "张三张三"
    },
    {
      "email": "j.martinez@brown.gov",
      "fullName": "张三张三张三张三"
    },
    {
      "email": "y.martin@lewis.io",
      "fullName": "张三张三张三张三"
    },
    {
      "email": "w.taylor@gonzalez.org",
      "fullName": "张三张三"
    },
    {
      "email": "j.thomas@garcia.org",
      "fullName": "张三张三张三张三"
    }
  ],
  "statusCode": 0
};
export default class ListViewText extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({//当上一行数据和下一行数据不相等的时候渲染数据
      rowHasChanged: (r1, r2)=> {
        r1 !== r2
      }
    });
    this.state = {
      dataSource: ds.cloneWithRows(data.result),//listView的数据源
      isLoading: true,
    }
    this.onLoad();
  }
  renderRow(item) {
    return(
    <TouchableOpacity
      onPress={() => {
        this.toast.show(item.fullName,DURATION.LENGTH_LONG)
      }}
    >
      <View style={styles.lists}>
        <Text style={styles.item}>{item.email}</Text>
        <Text style={styles.item}>{item.fullName}</Text>
      </View>
    </TouchableOpacity>
    )
  }
  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return(
      <View key={rowID} style={styles.line}></View>
    )
  }

  onLoad() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  renderFooter() {
    return <View>
      <Image
        style={{width: 300, height: 50}}
        source={{uri: 'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}/>
    </View>
  }

  render() {
    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item) => this.renderRow(item)}//每一行返回的视图  renderSeparator 渲染行与行之间分割的视图
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
          renderFooter={()=>this.renderFooter()}
          refreshcontrol={<RefreshControl//为ListView提供下拉刷新
            refreshing={this.state.isLoading}
            onRefresh={() => this.onLoad()}
            />}
        ></ListView>
        <Toast ref={toast => {this.toast = toast}}/>
        {/*react-native-easy-toast 提示组件 当Toast组件被渲染的时候,将toast赋值this.toast,Toast显示提示信息*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  lists: {
    height: 45,
    padding: 8
  },
  item: {
    fontSize: 16
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    marginTop: 4
  }
})
