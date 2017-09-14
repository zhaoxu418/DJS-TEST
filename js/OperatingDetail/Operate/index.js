/**
 * 操作
 *
 * @author xu.zhao
 * @date 2017-09-02
 */

import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';

import Overlay from 'rnx-ui/Overlay';
import { PView } from 'rnplus';
import styles from './style';
import Modify from './Modify';
import Delete from './Delete';
import ReportLoss from './ReportLoss';

export default class Operate extends PView {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.contain}>
        <Overlay
          onPress={this.props.hide}
          visible
        />
        {
          this.props.type === 'modify'
           ? <Modify {...this.props} style={styles.operateArea} />
           : null
        }
        {
          this.props.type === 'abandoned' || this.props.type === 'reportloss'
            ? <ReportLoss {...this.props} style={styles.operateArea} type={this.props.type} />
            : null
        }
        {
          this.props.type === 'delete'
            ? <Delete {...this.props} style={styles.operateArea} />
            : null
        }
      </View>
    );
  }
}

Operate.propTypes = {
  type: PropTypes.string, // 修改 -> modify,删除 -> delete,废弃 -> abandoned,报损 -> reportloss
};
