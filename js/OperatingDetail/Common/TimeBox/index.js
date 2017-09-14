/**
 * 操作时间box
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { DatePicker, List } from '@wnpm/antd-mobile';
import moment from 'moment';

import { PView } from 'rnplus';
import styles from './style';

export default class TimeBox extends PView {
  constructor(props) {
    super(props);
    this.state = {
      operateTime: '',
      showTime: this.props.defaultTime,
    };
  }
  // YYYY-MM - DD HH: mm:ss
  changeDate = (date) => {
    this.setState({
      showTime: moment(date).format('HH:mm'),
      operateTime: moment(date).format('YYYY-MM-DD HH:mm:ss'),
    }, () => {
      this.props.updateTime(this.state.operateTime);
    });
  }
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.loadTime}>
          <Text style={styles.time}>
            {this.state.showTime}
          </Text>
        </View>
        <View style={styles.loadTriangle}>
          <View style={styles.triangle} />
        </View>
        <View style={styles.timePicker}>
          <DatePicker
            mode="time"
            extra="操作时间"
            format={val => val.format('hh-mm-ss')}
            onChange={this.changeDate}
          >
            <List.Item arrow={false} />
          </DatePicker>
        </View>
      </View>
    );
  }
}

TimeBox.propTypes = {
};
