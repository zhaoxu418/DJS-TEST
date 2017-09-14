/**
 * 操作详情首页
 *
 * @author xu.zhao
 * @date 2017-09-01
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';
import {
  OperateAction,
} from 'BizAction';
import { Icon } from 'BizComponent';
import RNPlus, { PView } from 'rnplus';
import styles from './style';

import ScreenGoods from './ScreenGoods';
import MakeDetail from './MakeDetail';
import BatchDetail from './BatchDetail';
import Operate from './Operate';
import SelectedMember from './Common/SelectedMember';

import API from './API';

export default class OperatingDetail extends PView {
  static reduxPlugin = {
    mapStateToProps: ['Operate.visible'],
    mapDispatchToProps: {
      showAddOperate: OperateAction.showAddOperate,
      hideAddOperate: OperateAction.hideAddOperate,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
      operatorVisible: false,
      operatorType: 'none',
      operatorData: null,
      goodsList: [],
      batchList: [],
      batchDetailList: [],
    };

    this.changeIsMore = this.changeIsMore.bind(this);

    this.updateOperateState = this.updateOperateState.bind(this);
    this.hideOperate = this.hideOperate.bind(this);
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.getGoodsList();
    });
  }
  /** --request--start-- */
  getGoodsList() {
    const {
      shopInfo,
      category,
    } = this.props.param;
    API.getGoodsList(shopInfo.shopId, category.id).then((data) => {
      this.setState({
        goodsList: data,
      });
      return data[0].skuId;
    }).then((skuId) => {
      this.getBatchList(skuId);
    });
  }
  getBatchList(skuId) {
    const {
      shopInfo,
    } = this.props.param;
    API.getBatchList(shopInfo.shopId, skuId).then((data) => {
      this.setState({
        batchList: data,
      });
      return data;
    }).then((data) => {
      this.getBatchDetailList(data[0].skuId, data[0].batchId);
    });
  }
  getBatchDetailList(skuId, batchId) {
    const { shopInfo } = this.props.param;
    API.getBatchDetailList(shopInfo.shopId, skuId, batchId).then((data) => {
      this.setState({
        batchDetailList: data,
      });
    });
  }
  /** --request--end-- */
  /** --ScreenGoods--events--start-- */
  changeIsMore(clickGoods = false) {
    if (clickGoods && !this.state.isMore) {
      return;
    }
    // LayoutAnimation.spring();
    this.setState({
      isMore: !this.state.isMore,
    });
  }
  /** --ScreenGoods--events--end-- */
  /** --BatchDetail--events--start-- */
  updateOperateState(visible, type, data) {
    this.setState({
      operatorVisible: visible,
      operatorType: type,
      operatorData: data,
    });
  }
  hideOperate() {
    this.setState({
      operatorVisible: false,
    });
  }
  /** --BatchDetail--events--end-- */
  render() {
    return (
      <View style={styles.contain}>
        <View style={styles.leftArea}>
          <ScreenGoods
            goodsList={this.state.goodsList}
            style={[
              styles.screenGoodsArea,
              this.state.isMore ? { flex: 1 } : { height: (50 * 2) + (20 * 3) + 1.5 + 27 + 20 }]}
            changeIsMore={this.changeIsMore}
            getBatchList={skuId => this.getBatchList(skuId)}
          />
          {
            this.state.isMore
              ? null
              : <MakeDetail style={styles.makeDetailArea} batchList={this.state.batchList} />
          }
        </View>
        <BatchDetail
          style={styles.batchDetailArea}
          updateOperateState={this.updateOperateState}
          batchDetailList={this.state.batchDetailList}
        />
        {
          this.state.operatorVisible
            ? <Operate
              {...this.props}
              data={this.state.operatorData}
              type={this.state.operatorType}
              hide={this.hideOperate}
            />
            : null
        }
        {
          this.props.visible
            ? <SelectedMember hide={() => this.props.hideAddOperate()} />
            : null
        }
        <TouchableOpacity
          style={styles.close}
          onPress={() => RNPlus.back()}
        >
          <Icon name={'close'} />
        </TouchableOpacity>
      </View>
    );
  }
}

OperatingDetail.propTypes = {
};
