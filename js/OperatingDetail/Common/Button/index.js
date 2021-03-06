/**
 * common button
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { PView } from 'rnplus';
import styles from './style';

export default class Button extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { onPress, style, textStyle, text, activity } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.contain, style]}
        disabled={!activity}
        accessible={activity}
      >
        <Text style={textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
};

Button.defaultProps = {
  activity: true,
};
