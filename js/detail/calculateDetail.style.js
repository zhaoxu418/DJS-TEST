import {
  StyleSheet,
  Dimensions,
  // Platform,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
// const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    width: screemWidth,
    height: 74,
    justifyContent: 'center',
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  renderRow: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: 'white',
  },
  rowLeft: {
    width: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: -25,
    marginBottom: -25,
  },
  navBarRightButton: {
    width: 16,
    height: 16,
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 8,
    color: '#888888',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 7,
    marginTop: 5,
  },
});
