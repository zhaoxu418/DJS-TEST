/**
 * 新版本-打卡页面
 *
 * @author xu.zhao
 * @date 2017-09-04
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import RNPlus, { PView } from 'rnplus';
import {
  NavBarLine,
} from 'BizComponent';
import './AddShift';
import styles from './style';
import StateRow from './StateRow';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class AttendanceNew extends PView {
  constructor(props) {
    super(props);
    this.mockData = [1, 2];
    this.state = {
      dataSource: ds.cloneWithRows(this.mockData),
    };
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow() {
    return (
      <View>
        <View style={[styles.viewCenter, styles.numView]}>
          <Text style={{ marginLeft: 10 }}>
            1
          </Text>
        </View>
        <StateRow shiftText="上班：07：00" especial="申诉后生效" stateText="未打卡" state={false} />
        <StateRow shiftText="下班：17：00" stateText="已打卡" />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.contain}>
        <NavBarLine
          title="考勤"
          rightBtn="统计"
          rightBtnStyle={{ color: '#666' }}
          rightEvent={() => {
            RNPlus.open('AttendanceSummary', {
            });
          }}
        />
        <ListView
          showsVerticalScrollIndicator={false}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}

AttendanceNew.propTypes = {
};
