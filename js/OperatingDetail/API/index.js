import {
  Request,
  toolTip,
} from 'BizUtil';

module.exports = {
  /**
   * 获取商品列表，按商品筛选
   *
   * @param {any} shopId
   * @param {any} categoryId
   */
  getGoodsList(shopId, categoryId) {
    const promise = new Promise((resolve) => {
      const param = {
        shopId,
        categoryId,
      };
      Request.get({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/make/list'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          return;
        }
        console.log('getGoodsList----------------------data', res.data);
        if (res.data && res.data.length > 0) {
          resolve(res.data);
        } else {
          toolTip.show('商品列表为空', 2000);
        }
      }).catch((err) => {
        console.log(err);
        toolTip.show('请求商品列表失败', 2000);
      });
    });
    return promise;
  },

  /**
   * 获取所有商品下的批次列表
   *
   * @param {any} shopId
   * @param {any} categoryId
   */
  getAllBatchList(shopId, categoryId) {
    const promise = new Promise((resolve) => {
      const param = {
        shopId,
        categoryId,
      };
      Request.get({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/batch/list/all'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          return;
        }
        console.log('getAllBatchList----------------------data', res.data);
        resolve(res.data);
      }).catch((err) => {
        console.log(err);
        toolTip.show('请求全部批次列表失败', 2000);
      });
    });
    return promise;
  },

  /**
   * 获取某个商品下的批次列表
   *
   * @param {any} shopId
   * @param {any} categoryId
   * @returns
   */
  getBatchList(shopId, skuId) {
    const promise = new Promise((resolve) => {
      const param = {
        shopId,
        skuId,
      };
      Request.get({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/batch/list'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          return;
        }
        console.log('getBatchList----------------------data', res.data);
        resolve(res.data);
      }).catch((err) => {
        console.log(err);
        toolTip.show('请求批次列表失败', 2000);
      });
    });
    return promise;
  },

  /**
   * 请求批次详情
   *
   * @param {any} shopId
   * @param {any} skuId
   * @param {any} batchId
   */
  getBatchDetailList(shopId, skuId, batchId) {
    const promise = new Promise((resolve) => {
      const param = {
        shopId,
        skuId,
        batchId,
      };
      Request.get({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/batch/detail/list'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          return;
        }
        console.log('getBatchDetailList----------------------data', res.data);
        if (res.data && res.data.length > 0) {
          res.data.map((item) => {
            switch (item.operateType) {
              case 1:
                item.operateTypeValue = '制作';
                break;
              case 5:
                item.operateTypeValue = '废弃';
                break;
              case 6:
                item.operateTypeValue = '报损';
                break;
              default:
                item.operateTypeValue = '';
            }
          });
          console.log('getBatchDetailList----------------------data', res.data);
          resolve(res.data);
        } else {
          toolTip.show('批次详情为空', 2000);
        }
      }).catch((err) => {
        console.log(err);
        toolTip.show('请求批次详情失败', 2000);
      });
    });
    return promise;
  },

  /**
   * 提前售完
   *
   * @param {any} batchId
   */
  manualSoldOut(batchId) {
    const promise = new Promise((resolve) => {
      const param = {
        batchId,
      };
      Request.post({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/option/manual'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          toolTip.show('手动售完出错，请稍后重试', 2000);
          return;
        }
        console.log('manualSoldOut----------------------data', res);
        resolve(res);
        toolTip.show('手动售完处理成功', 2000);
      }).catch((err) => {
        console.log(err);
      });
    });
    return promise;
  },

  /**
   * 报损，废弃操作
   *
   * @param {any} data
   */
  submitReportLoss(data) {
    const promise = new Promise((resolve) => {
      Request.post({
        uri: Request.getApiAddress('FRESHNESS', 'shop/sku/option'),
        data,
      }).then((res) => {
        if (!res.ret) {
          toolTip.show(res.msg, 2000);
          return;
        }
        console.log('submit----------------------data', res);
        resolve(res);
        toolTip.show('操作成功', 2000);
      }).catch((err) => {
        console.log(err);
      });
    });
    return promise;
  },

  /**
   * 修改某个商品某个批次的状态
   *
   * @param {any} data
   */
  modifyState(data) {
    const promise = new Promise((resolve) => {
      Request.post({
        uri: Request.getApiAddress('FRESHNESS', 'shop/batch/state/modify'),
        data,
      }).then((res) => {
        if (!res.ret) {
          toolTip.show(res.msg, 2000);
          return;
        }
        console.log('modifyState----------------------data', res);
        resolve(res);
        toolTip.show('操作成功', 2000);
      }).catch((err) => {
        console.log(err);
      });
    });
    return promise;
  },

  /**
   * 删除批次记录
   *
   * @param {any} id
   * @param {any} skuId
   * @param {any} batchId
   * @param {any} operator
   */
  deleteState(id, skuId, batchId, operator) {
    const promise = new Promise((resolve) => {
      const param = {
        id,
        skuId,
        batchId,
        operator,
      };
      Request.post({
        uri: Request.getApiAddress('FRESHNESS', 'shop/batch/state/delete'),
        data: param,
      }).then((res) => {
        if (!res.ret) {
          toolTip.show(res.msg, 2000);
          return;
        }
        console.log('deleteState----------------------data', res);
        resolve(res);
        toolTip.show('操作成功', 2000);
      }).catch((err) => {
        console.log(err);
      });
    });
    return promise;
  },

  /**
   * 获取操作人列表
   *
   * @param {any} shopId
   */
  getStaffList(shopId) {
    const promise = new Promise((resolve) => {
      Request.get({
        uri: Request.getApiAddress('FRESHNESS', 'shop/staffAll'),
        data: {
          shopId,
        },
      }).then(({ ret, data }) => {
        if (!ret || !data) {
          toolTip.show('获取操作人列表失败', 2000);
          return;
        }

        if (!Array.isArray(data)
          || data.length < 1) {
          toolTip.show('操作人列表返回格式错误', 2000);
          return;
        }
        resolve(data);
      }).catch((err) => {
        console.log(err);
      });
    });
    return promise;
  },
};
