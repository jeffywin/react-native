/**
 * Created by jeffywin on 2018/6/7.
 */
import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import NavigationBar from '../../NavigatorBar'
import ViewUitls from '../../utils/viewUtils'
import Language,{FLAG_LANGUAGE} from '../../expand/Language'

export default class CustomKey extends React.Component {
  constructor(props) {
    super(props);
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
	back() {
		this.props.navigator.pop()
	}
  onSave() {}
  renderView() {
    return <Text style={{height: 400,width:400}}>{JSON.stringify(this.state.dataArray)}</Text>
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