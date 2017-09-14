/**
 * 成员列表，选择一个
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import Overlay from 'rnx-ui/Overlay';
import { PView } from 'rnplus';
import styles from './style';
import Button from '../Button';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const space = 10;
const rowNum = 5;
const columnNum = 6;

export default class SelectedMember extends PView {
  constructor(props) {
    super(props);
    this.mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];
    this.state = {
      dataSource: ds.cloneWithRows(this.mockData),
      data: this.mockData,
      itemWidth: 0,
      itemHeight: 0,
      allPageNum: Math.ceil(this.mockData.length / (rowNum * columnNum)),
      currentPageNum: 1,
    };
    this.renderRow = this.renderRow.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.listview.measure((x, y, width, height, left, top) => {
        console.log(top);
        this.setState({
          itemWidth: ((width - (space * (rowNum - 1))) / rowNum) - (rowNum * 2),
          itemHeight: ((height - (space * (columnNum - 1))) / columnNum) - 0.5,
        });
      });
    });
  }
  selectedItem(rowID) {
    console.log(rowID);
  }
  renderRow(rowData, sectionID, rowID) {
    return (
      <Button
        onPress={() => this.selectedItem(rowID)}
        style={[styles.row, {
          width: this.state.itemWidth,
          height: this.state.itemHeight,
          marginLeft: (Math.ceil(rowID / rowNum) > parseInt(rowID / rowNum, 0)) ? space : 0,
          marginTop: (rowID > rowNum - 1) ? space : 0,
        }]}
        text={'上一页'}
        textStyle={{ fontSize: 22, color: '#1e1e1e' }}
      />
    );
  }
  nextPage() {
    const nextPageNum = this.state.currentPageNum + 1;
    if (nextPageNum > this.state.allPageNum) {
      return;
    }
    this.setState({
      currentPageNum: nextPageNum,
    }, () => {
      this.scrollview.scrollTo({
        x: 0,
        y: ((columnNum * this.state.itemHeight) + (space * columnNum))
        * (this.state.currentPageNum - 1),
      });
    });
  }
  previousPage() {
    const previousPageNum = this.state.currentPageNum - 1;
    if (previousPageNum < 1) {
      return;
    }
    this.setState({
      currentPageNum: previousPageNum,
    }, () => {
      this.scrollview.scrollTo({
        x: 0,
        y: ((columnNum * this.state.itemHeight) + (space * columnNum))
        * (this.state.currentPageNum - 1),
      });
    });
  }
  render() {
    const { currentPageNum, allPageNum } = this.state;
    return (
      <View style={styles.contain}>
        <Overlay
          onPress={this.props.hide}
          visible
        />
        <View style={styles.loadList}>
          <View style={styles.topView}>
            <Text style={{ fontSize: 29, color: '#1e1e1e' }}>
              请添加操作人
            </Text>
          </View>
          <View ref={(listview) => { this.listview = listview; }} style={styles.centerView}>
            {
              this.state.itemWidth === 0
                ? null
                : <ListView
                  ref={((scrollview) => { this.scrollview = scrollview; })}
                  scrollEnabled={false}
                  initialListSize={this.state.data.length}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  enableEmptySections
                />
            }
          </View>
          <View style={styles.bottomView}>
            <Button
              activity={!(currentPageNum === 1)}
              onPress={this.previousPage}
              style={currentPageNum === 1 ? styles.disableButtonView : styles.buttonView}
              text={'上一页'}
              textStyle={{ fontSize: 22, color: '#ffffff' }}
            />
            <Button
              activity={!(currentPageNum === allPageNum)}
              onPress={this.nextPage}
              style={currentPageNum === allPageNum ? styles.disableButtonView : styles.buttonView}
              text={'下一页'}
              textStyle={{ fontSize: 22, color: '#ffffff' }}
            />
          </View>
        </View>
      </View>
    );
  }
}

SelectedMember.propTypes = {
};
