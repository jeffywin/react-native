/**
 * Created by jeffywin on 2018/5/3.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 45;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hidden: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    }
  }

  render() {
    let titleView = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>
    let content = <View style={styles.navBar}>
      {this.props.leftButton}
      <View style={styles.titleViewContainer}>
        {titleView}
      </View>
      {this.props.rightButton}
    </View>
    return(
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  navBarTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    top: 0,
    right: 40,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  navBarButton: {
    alignItems: 'center',
  },
})
