/**
 * 操作中头部的通用行内容
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

export default class ContentView extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { title, value, custom } = this.props;
    return (
      <View style={styles.contentView}>
        <Text style={styles.textView}>
          {title}
        </Text>
        {
          custom
            ? custom
            : <Text style={styles.textView}>{value}</Text>
        }
      </View>
    );
  }
}

ContentView.propTypes = {
};
