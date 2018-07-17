
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import CustomKeyPage from './customKey'
import NavigationBar from '../../NavigatorBar'

export default class MyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='我的'
                />
                <Text
                    style={styles.tips}
                    onPress={()=>{
                        this.props.navigator.push({
                            component:CustomKeyPage,
                            params:{...this.props}
                        })
                    }}
                >
                    自定义标签
                </Text>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})
