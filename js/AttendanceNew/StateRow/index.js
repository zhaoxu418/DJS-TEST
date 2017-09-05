/**
 * 考勤，行页面
 *
 * @author xu.zhao
 * @date 2017-09-05
 */

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { PView } from 'rnplus';
import {
  Icon,
} from 'BizComponent';
import styles from './style';
import Button from '../Common/Button';

export default class StateRow extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { shiftText, especial, stateText, state = true } = this.props;
    return (
      <View style={[styles.viewCenter, styles.textView]}>
        <Text style={styles.shift}>
          {shiftText}
        </Text>
        <Text style={styles.especial}>
          {especial}
        </Text>
        <Text style={styles.state}>
          {stateText}
        </Text>
        <Button
          style={state ? styles.button : styles.noneButton}
          text="打卡"
          textStyle={state ? styles.buttonText : styles.noneButtonText}
        />
        <Icon name="rightArrow" style={[styles.rightIcon, { opacity: especial && especial.length > 0 ? 1 : 0 }]} />
      </View>
    );
  }
}

StateRow.propTypes = {
};
