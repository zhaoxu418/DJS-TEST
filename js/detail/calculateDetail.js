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
import styles from './calculateDetail.style';

export default class CalculateDetail extends PView {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.mockData = [0, 1, 2, 3, 4, 5, 6, 7];

    this.state = {
      dataSource: ds.cloneWithRows(this.mockData),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData, sectionID, rowID) {
    console.log(rowID, this.mockData.length);
    return (
      <View style={styles.renderRow}>
        <View style={styles.rowLeft}>
          <View style={{ width: 1, backgroundColor: parseInt(rowID, 0) === 0 ? 'transparent' : '#ff8111', marginTop: 0, height: 29 }} />
          <View style={{ width: 10, height: 10, borderWidth: 1, borderColor: '#ff8111', borderRadius: 5 }} />
          {
            parseInt(rowID, 0) === this.mockData.length - 1
              ? null
              : <View style={{ width: 1, backgroundColor: '#ff8111', flex: 1 }} />
          }
        </View>
        <View style={{ marginLeft: 14.5 }}>
          <Text style={{ fontSize: 16, color: '#333333' }}>
            5.5小时
          </Text>
          <Text style={{ fontSize: 14, color: '#888888', marginTop: 5 }}>
            2017-08-01 星期四 B班次
          </Text>
          <Text style={{ fontSize: 14, color: '#888888', marginTop: 2 }}>
            请假时间：14:00-21:00
          </Text>
        </View>
      </View>
    );
  }

  topView() {
    return (
      <View style={styles.topView}>
        <Text style={{ fontSize: 16, color: '#333333' }}>
          事假15个小时
        </Text>
        <Text style={{ fontSize: 12, color: '#888888', marginTop: 2 }}>
          将在考勤统计中计算
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBarLine
          title="计算明细"
          rightBtn="i"
          rightBtnStyle={styles.navBarRightButton}
          rightEvent={() => {
            RNPlus.open('AttendanceRule');
          }}
        />
        {this.topView()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}
