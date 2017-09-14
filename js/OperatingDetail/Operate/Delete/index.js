/**
 * 删除操作
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { PView } from 'rnplus';
import styles from './style';
import ContentView from '../../Common/ContentView';
import TimeBox from '../../Common/TimeBox';
import Button from '../../Common/Button';
import AddOperation from '../../Common/AddOperation';

export default class Delete extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.contain, this.props.style]}>
        <Text style={{ color: '#1e1e1e', fontSize: 29 }}>
          西红柿炒鸡蛋
        </Text>
        <View style={{ marginTop: 22.5 - 10 }}>
          <ContentView title={'当前修改人：'} value={''} custom={<AddOperation />} />
          <ContentView title={'操作：'} value={'删除'} />
          <ContentView title={'操作人：'} value={'高伟'} />
          <ContentView title={'操作时间：'} value={''} custom={<TimeBox />} />
        </View>
        <Button
          style={styles.button}
          text={'删除'}
          textStyle={{ fontSize: 22, color: 'white' }}
        />
      </View>
    );
  }
}

Delete.propTypes = {
};
