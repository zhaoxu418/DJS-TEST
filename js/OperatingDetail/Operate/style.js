import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度

export default StyleSheet.create({
  contain: {
    flex: 1,
    position: 'absolute',
    width: screemWidth,
    height: screenHeight,
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  operateArea: {
    width: screemWidth / 2,
    height: screenHeight,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    top: 0,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
