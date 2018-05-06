/**
 * Created by jeffywin on 2018/5/3.
 */

import React, {PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 45;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

class NavigatorBar extends React.Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.title,
    titleView: PropTypes.titleView,
    hidden: PropTypes.hidden,
    leftButton: PropTypes.leftButton,
    rightButton: PropTypes.rightButton
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      hide: false
    }
  }

  render() {
    let titleView = this.props.titleView ? this.props.titleView : <Text>{this.props.title}</Text>
    let content = <View>
      {this.props.leftButton}
      {this.props.rightButton}
    </View>
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.creat({
  container: {
    background: '#c33'
  }
})

export default NavigatorBar