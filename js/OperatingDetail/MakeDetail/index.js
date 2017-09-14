/**
 * 点击某个商品后，列出的多个批次的制作详情
 *
 * @author xu.zhao
 * @date 2017-09-01
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';

import moment from 'moment';
import { PView } from 'rnplus';
import styles from './style';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class MakeDetail extends PView {
  constructor(props) {
    super(props);
    this.state = {
      batchsList: this.props.batchList,
      dataSource: ds.cloneWithRows(this.props.batchList),
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillReceiveProps(newtProps) {
    this.setState({
      batchsList: newtProps.batchList,
      dataSource: ds.cloneWithRows(newtProps.batchList),
    }, () => {
      if (this.state.batchsList.length > 0) {
        this.selectedRow(0);
      }
    });
  }
  createTypeText(type, num, time, selected) {
    return (
      <Text style={{ fontSize: 17, color: selected ? 'white' : '#1e1e1e' }}>{type}：{num}({time})</Text>
    );
  }
  selectedRow(rowID) {
    const currentBatchList = this.state.batchsList;
    for (const batch of currentBatchList) {
      batch.selected = false;
    }
    currentBatchList[rowID].selected = true;
    this.setState({
      batchsList: currentBatchList,
      dataSource: ds.cloneWithRows(currentBatchList),
    });
  }
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        key={`${rowID}_batch`}
        underlayColor={'transparent'}
        onPress={() => this.selectedRow(rowID)}
      >
        <View>
          {
            rowData.selected
              ? <View
                style={{
                  borderTopWidth: 20,
                  borderTopColor: 'transparent',
                  borderLeftWidth: 30,
                  borderLeftColor: '#fc6b10',
                  borderBottomWidth: 20,
                  borderBottomColor: 'transparent',
                  height: 0,
                  width: 0,
                  position: 'absolute',
                  right: 5,
                  top: 26,
                }}
              />
              : null
          }
          <View style={[styles.rowNormal, rowData.selected ? { backgroundColor: '#fc6b10', borderWidth: 0 } : {}]}>
            <View style={styles.commonRowCenter}>
              <Text style={[styles.dishName, rowData.selected ? { color: 'white' } : {}]}>
                {rowData.skuName}
              </Text>
              <Text style={[styles.dishState, rowData.selected ? { color: 'white' } : {}]}>
                已废弃
              </Text>
            </View>
            <View style={styles.state}>
              <Text>
                {this.createTypeText('制作', rowData.makeCount, rowData.makeTime && moment(rowData.makeTime).format('HH:mm'), rowData.selected)}
              </Text>
              <Text>
                {this.createTypeText('报损', rowData.lossCount, rowData.lossTime && moment(rowData.lossTime).format('HH:mm'), rowData.selected)}
              </Text>
              <Text>
                {this.createTypeText('废弃', rowData.abortCount, rowData.abortTime && moment(rowData.abortTime).format('HH:mm'), rowData.selected)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={[styles.contain, this.props.style]}>
        <View>
          <Text style={{ fontSize: 27, color: '#1e1e1e' }}>
            制作详情
          </Text>
          <ListView
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </View>
      </View>
    );
  }
}

MakeDetail.propTypes = {
};
