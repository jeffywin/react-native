/**
 * Created by jeffywin on 2018/6/7.
 */
import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import NavigationBar from '../../NavigatorBar'
import ViewUitls from '../../utils/viewUtils'
import Language,{FLAG_LANGUAGE} from '../../expand/Language'//asyncStory存储
import CheckBox from 'react-native-check-box'
import ArrayUtils from '../../utils/ArrayUtils'

export default class CustomKey extends React.Component {
  constructor(props) {
    super(props);
    this.itemArr = []
    this.language = new Language(FLAG_LANGUAGE.flag_key)//实例化
    this.state={
      dataArray:[]
    }
  }
  componentDidMount(){
    this.loadData()
  }
  loadData() {
    this.language.fetch()
      .then(result => {
        this.setState({
          dataArray: result
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  click(data) {
    data.checked = !data.checked//点击改变checked属性
    ArrayUtils.updateArray(this.itemArr,data)
  }

	back() {
		this.props.navigator.pop()
  }
  renderCheckBox(data) {
    return (
      <CheckBox
        style={{flex: 1, padding: 10}}
        leftText={data.name}
        isChecked={data.checked}
        onClick={()=>{this.click(data)}}
        checkedImage={<Image source={require('../../pages/mine/image/ic_check_box.png')} style={{tintColor: '#2196F3'}}/>} 
        unCheckedImage={<Image source={require('../../pages/mine/image/ic_check_box_outline_blank.png')}/>}  
      />
    )
  }
  onSave() {
    if(this.itemArr.length !==0) {//this.itemArr只是起到判断选择checkbox
      this.language.save(this.state.dataArray)
    }
    this.props.navigator.pop()
    
  }
  renderView() {
    if(!this.state.dataArray || this.state.dataArray.length === 0) return
    let len = this.state.dataArray.length
    const Arr = []
    for(let i=0; i<len-2; i+=2) {//每次+2，+到第6元素就会越界，没有arr[7],所以去除最后连个单独处理 
      Arr.push(
        <View key={i}>
            <View style={{flexDirection:'row'}}>
                {this.renderCheckBox(this.state.dataArray[i])}
                {this.renderCheckBox(this.state.dataArray[i+1])}
            </View>
        </View>
      )
    }
    Arr.push(
      <View key={len-1}>
          <View style={{flexDirection:'row'}}>
              {len % 2 ===0 ? this.renderCheckBox(this.state.dataArray[len-2]): null}
              {this.renderCheckBox(this.state.dataArray[len-1])}
          </View>
      </View>
    )
    return Arr
  }	
	render() {
		let rightButton = <TouchableOpacity
													onPress={() => this.onSave()}
												>
											<View>
												<Text style={{marginRight:5, color:'white'}}>保存</Text>
											</View>
										</TouchableOpacity>
		return(
			<View style={styles.container}>
			<NavigationBar
        title='自定义标签'
				statusBar={{backgroundColor:'#2196f3'}}
				leftButton={ViewUitls.getLeftButton(()=>{this.back()})}
				rightButton={rightButton}
      />
        <ScrollView>
          {this.renderView()}
        </ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});