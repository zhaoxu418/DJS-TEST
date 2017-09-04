import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { PView } from 'rnplus';
import {
  NavBarLine,
} from 'BizComponent';
import styles from './attendanceRule.style';

import ruleData from './mock';

export default class AttendanceRule extends PView {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(ruleData.items),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  rowText(value, items) {
    return (
      <View>
        <Text numberOfLines={5} style={styles.rowText}>
          {items ? '' : '• '}{value}
        </Text>
        {
          items && items.map(item => this.rowText(item.text, item.items))
        }
      </View>
    );
  }
  renderRow(rowData, sectionID, rowID) {
    console.log(rowID);
    return (
      <View style={styles.renderRow}>
        <View style={styles.rowLoadView}>
          <View style={styles.rowHead}>
            <Text style={{ fontSize: 16, color: '#333333' }}>
              {rowData.text}
            </Text>
          </View>
          {
            rowData.items.map(item => this.rowText(item.text, item.items))
          }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBarLine title={ruleData.text} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}
