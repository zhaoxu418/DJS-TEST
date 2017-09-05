/**
 * 新版本-新增班次
 *
 * @author xu.zhao
 * @date 2017-09-04
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import RNPlus, { PView } from 'rnplus';
import {
  NavBarLine,
} from 'BizComponent';
import styles from './style';

export default class AddShift extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  rowView(text) {
    return (
      <View style={styles.rowView}>
        <Text style={{ marginLeft: 20 }}>
          {text}
        </Text>
        <Text style={{ marginRight: 20 }}>
          请选择(必填)
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.contain}>
        <NavBarLine
          title="新增班次"
        />
        {this.rowView('开始时间')}
        {this.rowView('结束时间')}
      </View>
    );
  }
}

AddShift.propTypes = {
};
