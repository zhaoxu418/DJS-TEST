/**
 * 某个批次的详情
 *
 * @author xu.zhao
 * @date 2017-09-01
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import moment from 'moment';
import { PView } from 'rnplus';
import styles from './style';
import Button from '../Common/Button';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class BatchDetail extends PView {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.batchDetailList),
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillReceiveProps(newtProps) {
    this.setState({
      dataSource: ds.cloneWithRows(newtProps.batchDetailList),
    });
  }
  textView(text, style = {}, textStyle = {}) {
    return (
      <View style={[styles.textView, style]}>
        <Text style={{ fontSize: 17, color: '#666666', ...textStyle }}>
          {text}
        </Text>
      </View>
    );
  }
  topTypeView() {
    return (
      <View style={[styles.row, { marginTop: 24 }]}>
        {this.textView('操作类型', { backgroundColor: 'black' }, { color: 'white' })}
        {this.textView('时间', { backgroundColor: 'black' }, { color: 'white' })}
        {this.textView('数量', { backgroundColor: 'black' }, { color: 'white' })}
        {this.textView('操作人', { backgroundColor: 'black' }, { color: 'white' })}
        {this.textView('操作', { backgroundColor: 'black', flex: 2 }, { color: 'white' })}
      </View>
    );
  }

  /**
   * 操作类型
   * 修改 -> modify,删除 -> delete,废弃 -> abandoned,报损 -> reportloss
   * @param {any} type
   * @memberof BatchDetail
   */
  openOperate(type, data) {
    this.props.updateOperateState(true, type, data);
  }
  renderRow(rowData) {
    return (
      <View style={styles.row}>
        {this.textView('制作')}
        {this.textView(rowData.operateTime && moment(rowData.operateTime).format('HH:mm'))}
        {this.textView(rowData.count ? rowData.count : 0)}
        {this.textView(rowData.operatorName)}
        <Button
          style={styles.textView}
          text={'删除'}
          onPress={() => this.openOperate('delete', rowData)}
          textStyle={{ fontSize: 17, color: '#4a90e2' }}
        />
        <Button
          style={[styles.textView, { borderLeftWidth: 0 }]}
          text={'修改'}
          onPress={() => this.openOperate('modify', rowData)}
          textStyle={{ fontSize: 17, color: '#ff5200' }}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={[styles.contain, this.props.style]}>
        <Text style={styles.title}>香菇青菜包</Text>
        <View>
          {this.topTypeView()}
          <ListView
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </View>
        <View style={styles.bottomView}>
          <Button
            style={styles.buttonView}
            text={'报损'}
            onPress={() => this.openOperate('reportloss')}
            textStyle={{ fontSize: 22, color: '#fc6b10' }}
          />
          <Button
            style={[styles.buttonView, { backgroundColor: '#fc6b10' }]}
            text={'废弃'}
            onPress={() => this.openOperate('abandoned')}
            textStyle={{ fontSize: 22, color: 'white' }}
          />
        </View>
      </View>
    );
  }
}

BatchDetail.propTypes = {
};
