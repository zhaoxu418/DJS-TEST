import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度
const space = 80;

export default StyleSheet.create({
  contain: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: screemWidth,
    height: screenHeight,
    backgroundColor: 'transparent',
  },
  loadList: {
    position: 'absolute',
    left: space,
    top: space,
    width: screemWidth - (space * 2),
    height: screenHeight - (space * 2),
    backgroundColor: 'white',
  },
  topView: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    flex: 4,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonView: {
    width: 122,
    height: 41,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5200',
  },
  disableButtonView: {
    width: 122,
    height: 41,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cacaca',
  },
  row: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 3,
    backgroundColor: 'white',
  },
});
