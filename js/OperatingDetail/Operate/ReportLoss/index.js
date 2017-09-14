/**
 * 报损，废弃操作
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { PView } from 'rnplus';
import styles from './style';
import ContentView from '../../Common/ContentView';
import TimeBox from '../../Common/TimeBox';
import Button from '../../Common/Button';
import KeyBoard from '../../Common/KeyBoard';
import AddOperation from '../../Common/AddOperation';

export default class ReportLoss extends PView {
  constructor(props) {
    super(props);
    this.state = {
      operateNum: 0,
    };
    this.updateOperateNum = this.updateOperateNum.bind(this);
  }
  numView() {
    return (
      <View style={[styles.box, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ fontSize: 20, color: '#1e1e1e' }}>
          {this.state.operateNum}
        </Text>
      </View>
    );
  }
  updateOperateNum(num) {
    this.setState({
      operateNum: num,
    });
  }
  render() {
    return (
      <View style={[styles.contain, this.props.style]}>
        <Text style={{ color: '#1e1e1e', fontSize: 29 }}>
          西红柿炒鸡蛋
        </Text>
        <View style={{ marginTop: 22.5 - 10 }}>
          <ContentView title={'操作人：'} value={''} custom={<AddOperation />} />
          <ContentView title={'应废弃时间'} value={''} custom={<TimeBox />} />
          <ContentView title={'数量：'} value={''} custom={this.numView()} />
        </View>
        <KeyBoard
          style={styles.keyboard}
          update={this.updateOperateNum}
        />
        <Button
          style={styles.button}
          text={this.props.type === 'abandoned' ? '废弃' : '报损'}
          textStyle={{ fontSize: 22, color: 'white' }}
        />
      </View>
    );
  }
}

ReportLoss.propTypes = {
  type: PropTypes.string, // 废弃 -> abandoned,报损 -> reportloss
};
