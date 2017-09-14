import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度

export default StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  leftArea: {
    width: screemWidth / 2,
    height: screenHeight,
  },
  batchDetailArea: {
    width: screemWidth / 2,
    height: screenHeight,
    backgroundColor: '#f3f3f4',
  },
  screenGoodsArea: {
    backgroundColor: 'transparent',
  },
  makeDetailArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  close: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 30,
    top: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
