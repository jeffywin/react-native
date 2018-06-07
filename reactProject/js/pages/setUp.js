/**
 * Created by jeffywin on 2018/6/7.
 */

import React from 'react';
import {Navigator} from "react-native-deprecated-custom-components"
import { Text, View} from 'react-native';
import welcomePage from './welcomePage'

export default class setUp extends React.Component {
  render() {
    return (
        <Navigator
        initialRoute={{
          component: welcomePage
        }}
        renderScene={(route,navigator)=> {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}
      >
      </Navigator>
    );
  }
}
