import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ListView,
    RefreshControl
} from 'react-native';
import NavigatorBar from '../NavigatorBar'
import ResCell from './resposityCell'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import DataRespon from '../expand/DataRespository'
import Language,{FLAG_LANGUAGE} from '../expand/Language'
const URL = 'https://api.github.com/search/repositories?q='
const QUREY_STR='&sort=stars'

export default class PopularPage extends React.Component {
  constructor(props){
    super(props);
    this.language = new Language(FLAG_LANGUAGE.flag_key)
    this.state={
      lanArr: []
    }
  }
  componentDidMount(){
    this.loadData()
  }
  loadData() {
    this.language.fetch()
      .then(result => {
        this.setState({
          lanArr: result
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
	render() {
    let content = this.state.lanArr.length > 0 ? ( <ScrollableTabView 
      tabBarBackgroundColor="#2196f3"
      tabBarActiveTextColor="#fff"//激活状态下横线颜色
      tabBarInactiveTextColor='mintcream'
      tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height: 2}}
      renderTabBar={()=><ScrollableTabBar/>}>

    {this.state.lanArr.map((v,i)=>{
      return v.checked ? <PopularTab key={i} tabLabel={v.name}></PopularTab> : null
    })}  
      {/* <PopularTab tabLabel='JAVA'>JAVA</PopularTab>
      <PopularTab tabLabel='IOS'>IOS</PopularTab>
      <PopularTab tabLabel='Android'>Android</PopularTab>
      <PopularTab tabLabel='JavaScript'>JavaScript</PopularTab> */}
    </ScrollableTabView>) : null
		return(
			<View style={styles.container}>
				<NavigatorBar
					title='最热'
          //statusBar={{backgroundColor:'#2196f3'}}
				/>
        {content}
				{/* <Text style={styles.tips} onPress={() => {this.onLoad()}}>获取数据</Text>
				<TextInput
					style={{height:20,borderWidth: 1}}
					onChangeText = {text => this.text = text}
				/>
				<Text style={{height:500,borderWidth: 1,marginTop: 5}}>{this.state.result}</Text> */}
			</View>
		)
	}
}

class PopularTab extends React.Component {
  constructor(props){
    super(props);
    this.DataRespon = new DataRespon();
    
    this.state={
      result: '',
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
      isLoading: false
    }
  }

  componentDidMount() {
    this.onLoad()
  }

  onLoad() {
    this.setState({
      isLoading: true
    })
    let url = URL+this.props.tabLabel+QUREY_STR;
    this.DataRespon.getFetchRespon(url)
      .then(result=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result.items),
          isLoading: false
        })
      })
      .catch(error =>{
        this.setState({
          result: JSON.stringify(error)
        })
      })
  }
  renderRow(data){
    return(
      <ResCell data={data}/>
    )
  }

	render() {
    return(
     <View style={styles.container}>
       <ListView
        dataSource={this.state.dataSource}
        renderRow={(data)=>this.renderRow(data)}
        refreshControl={<RefreshControl
          refreshing={this.state.isLoading}
          onRefresh={() => this.onLoad()}
          title={'...isLoading'}
        />}
       ></ListView>
     </View>
    )
  }
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	tips: {
		fontSize: 20
	}
})