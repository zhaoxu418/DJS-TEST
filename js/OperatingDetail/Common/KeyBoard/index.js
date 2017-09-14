/**
 * 键盘
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { PView } from 'rnplus';
import styles from './style';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const rowSpace = 30;
const columnSpace = 20;
const maxValue = 100;

export default class KeyBoard extends PView {
  constructor(props) {
    super(props);
    this.mockData = [
      {
        text: '1',
        value: 1,
      },
      {
        text: '2',
        value: 2,
      },
      {
        text: '3',
        value: 3,
      },
      {
        text: '4',
        value: 4,
      },
      {
        text: '5',
        value: 5,
      },
      {
        text: '6',
        value: 6,
      },
      {
        text: '7',
        value: 7,
      },
      {
        text: '8',
        value: 8,
      },
      {
        text: '9',
        value: 9,
      },
      {
        text: '0',
        value: 0,
      },
      {
        text: '删除/退格',
        value: -1,
      },
    ];
    this.state = {
      dataSource: ds.cloneWithRows(this.mockData),
      itemWidth: 0,
      itemHeight: 0,
      value: this.props.value ? this.props.value : 0,
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.keyboard.measure((x, y, width, height, left, top) => {
        console.log(top);
        this.setState({
          itemWidth: ((width - (rowSpace * 2)) / 3) - (2 * 3),
          itemHeight: ((((width - (rowSpace * 2)) / 3) - (2 * 3)) / 6) * 5,
        });
      });
    });
  }
  changeValue(value) {
    let currentValue = this.state.value;
    if (value < 0) {
      currentValue = parseInt(currentValue / 10, 0);
    } else {
      currentValue = (currentValue * 10) + value;
    }
    if (currentValue > maxValue) {
      return;
    }
    this.setState({
      value: currentValue,
    }, () => {
      this.props.update(this.state.value);
    });
  }
  renderRow(rowData) {
    return (
      <TouchableOpacity
        onPress={() => this.changeValue(rowData.value)}
        style={{
          width:
          rowData.value === -1
            ? ((this.state.itemWidth * 2) + rowSpace + 8)
            : this.state.itemWidth,
          marginBottom: columnSpace,
          height: this.state.itemHeight,
          backgroundColor: 'white',
          borderColor: '#e8e8e8',
          borderWidth: 1,
          borderRadius: 2,
          shadowColor: '#000000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 3,
          elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 1,
        }}
        underlayColor={'transparent'}
      >
        <Text style={{ fontSize: 29, color: '#1e1e1e' }}>
          {rowData.text}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View
        ref={(keyboard) => {
          this.keyboard = keyboard;
        }}
        style={[styles.contain, this.props.style]}
      >
        {
          this.state.itemWidth === 0
            ? null
            :
            <ListView
              style={{ marginBottom: -columnSpace + 1 }}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              enableEmptySections
            />
        }
      </View>
    );
  }
}

KeyBoard.propTypes = {
};
