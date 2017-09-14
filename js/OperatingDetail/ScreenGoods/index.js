/**
 * 筛选商品列表
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

import {
  Icon,
} from 'BizComponent';
import { PView } from 'rnplus';
import styles from './style';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ScreenGoods extends PView {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
      goodsList: this.props.goodsList,
      dataSource: ds.cloneWithRows(this.props.goodsList),
      selectedItemNum: 0,
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.goodsList !== nextProps.goodsList) {
      this.setState({
        goodsList: nextProps.goodsList,
        dataSource: ds.cloneWithRows(nextProps.goodsList),
      }, () => {
        if (this.state.selectedItemNum === 0) {
          this.selectedRow(0);
        }
      });
    }
  }
  selectedRow(rowID) {
    const currentGoodsList = this.state.goodsList;
    for (const good of currentGoodsList) {
      good.selected = false;
    }
    currentGoodsList[rowID].selected = true;
    this.setState({
      goodsList: currentGoodsList,
      dataSource: ds.cloneWithRows(currentGoodsList),
      selectedItemNum: parseInt(rowID, 0),
    });
    this.changeMore(true);
  }
  selectedItem(rowID, skuId) {
    if (parseInt(rowID, 0) === this.state.selectedItemNum) {
      return;
    }
    this.selectedRow(rowID);
    this.props.getBatchList(skuId);
  }
  changeMore(isRow = false) {
    this.props.changeIsMore(isRow);
    if (isRow) {
      return;
    }
    this.setState({
      isMore: !this.state.isMore,
    });
  }
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
        key={`${rowID}_GOOD`}
        underlayColor={'transparent'}
        onPress={() => this.selectedItem(rowID, rowData.skuId)}
        style={[
          rowData.selected ? styles.buttonSelected : styles.buttonNormal,
          rowID % 3 === 0 ? {} : styles.buttonCommon]}
      >
        <Text
          style={
            rowData.selected ? styles.buttonTextSelected : styles.buttonTextNormal
          }
        >
          {rowData.skuName}
        </Text>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={[styles.contain, this.props.style[0], this.props.style[1]]}>
        <View style={{ backgroundColor: 'transparent' }}>
          <View style={styles.commonRowCenter}>
            <Text style={{ fontSize: 27, color: '#1E1E1E' }}>按商品筛选</Text>
            <TouchableHighlight
              onPress={() => this.changeMore()}
              underlayColor={'transparent'}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text
                  style={{ fontSize: 22, color: '#666666' }}
                >
                  {this.state.isMore ? '收起' : '更多'}
                </Text>
                <Icon
                  style={{ fontSize: 22, color: '#666666', marginLeft: 5 }}
                  name={this.state.isMore ? 'arrowTop' : 'arrowDown'}
                />
              </View>
            </TouchableHighlight>
          </View>
          <ListView
            scrollEnabled={this.state.isMore}
            showsVerticalScrollIndicator={false}
            style={styles.listView}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </View>
      </View>
    );
  }
}

ScreenGoods.propTypes = {
};
