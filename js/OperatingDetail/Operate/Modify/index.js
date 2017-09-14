/**
 * 修改操作
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import moment from 'moment';
import RNPlus, { PView } from 'rnplus';
import styles from './style';
import ContentView from '../../Common/ContentView';
import TimeBox from '../../Common/TimeBox';
import Button from '../../Common/Button';
import KeyBoard from '../../Common/KeyBoard';
import AddOperation from '../../Common/AddOperation';

export default class Modify extends PView {
  constructor(props) {
    super(props);
    this.state = {
      operateNum: parseInt(this.props.data.count, 0),
      operateTime: this.props.data.operateTime,
    };
    this.updateOperateNum = this.updateOperateNum.bind(this);
    this.updateOperateTime = this.updateOperateTime.bind(this);
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
  updateOperateTime(time) {
    console.log(time);
    if (time && time.length > 0) {
      this.setState({
        operateTime: time,
      });
    }
  }
  render() {
    const { data } = this.props;
    return (
      <View style={[styles.contain, this.props.style]}>
        <Text style={{ color: '#1e1e1e', fontSize: 29 }}>
          {data.skuName}
        </Text>
        <View style={{ marginTop: 22.5 - 10 }}>
          <ContentView title={'当前修改人：'} value={''} custom={<AddOperation {...this.props} />} />
          <ContentView title={'操作：'} value={data.operateTypeValue} />
          <ContentView title={'操作人：'} value={data.operatorName} />
          <ContentView
            title={'操作时间：'}
            value={''}
            custom={<TimeBox updateTime={this.updateOperateTime} defaultTime={data.operateTime && moment(data.operateTime).format('HH:mm')} />}
          />
          <ContentView title={'数量：'} value={''} custom={this.numView()} />
        </View>
        <KeyBoard
          style={styles.keyboard}
          update={this.updateOperateNum}
          value={parseInt(data.count, 0)}
        />
        <Button
          style={styles.button}
          text={'确定'}
          textStyle={{ fontSize: 22, color: 'white' }}
        />
      </View>
    );
  }
}

Modify.propTypes = {
};
