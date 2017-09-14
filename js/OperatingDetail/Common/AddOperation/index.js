/**
 * 添加操作人:1.扫码添加,2.选项添加
 *
 * @author xu.zhao
 * @date 2017-09-11
 */

import React from 'react';
import {
  InteractionManager,
} from 'react-native';
import {
  OperateAction,
} from 'BizAction';
import { PView } from 'rnplus';
import styles from './style';
import Button from '../Button';
import API from '../../API';

export default class AddOperation extends PView {
  static reduxPlugin = {
    mapDispatchToProps: {
      showAddOperate: OperateAction.showAddOperate,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillReceiveProps(newtProps) {
    if (this.props.param.length > 0) {
      API.getStaffList(newtProps.param.shopInfo.shopId).then((data) => {

      });
    }
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      console.log('this.props.param-----------------------');
      console.log(this.props.param);
      if (this.props.param.length > 0) {
        API.getStaffList(this.props.param.shopInfo.shopId).then((data) => {

        });
      }
    });
  }
  showOperate() {
    console.log('showOperate-----');
    this.props.showAddOperate();
  }
  render() {
    return (
      <Button
        onPress={() => this.showOperate()}
        style={styles.button}
        text={'手动添加'}
        textStyle={styles.text}
      />
    );
  }
}

AddOperation.propTypes = {
};

AddOperation.defaultProps = {
};
