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
    backgroundColor: '#f5f5f9',
  },
  renderRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: screemWidth,
    marginTop: 10,
  },
  rowLoadView: {
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
    backgroundColor: 'transparent',
  },
  rowHead: {
    height: 48,
    width: screemWidth - (15 * 2),
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ececec',
  },
  rowText: {
    fontSize: 12,
    color: '#888888',
    marginTop: 10,
    lineHeight: 16,
    width: screemWidth - (15 * 2),
  },
});
