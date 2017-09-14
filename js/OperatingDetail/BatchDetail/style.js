import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度

export default StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 34,
    color: '#1e1e1e',
    fontSize: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: (screemWidth / 2) - (30 * 2),
  },
  listView: {
    width: (screemWidth / 2) - (30 * 2),
    borderRightWidth: 1,
    borderColor: '#e8e8e8',
    borderTopWidth: 1,
  },
  textView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  bottomView: {
    width: (screemWidth / 2) - (30 * 2),
    height: 41,
    backgroundColor: 'transparent',
    marginTop: 37.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonView: {
    width: 122,
    height: 41,
    borderColor: '#ff5200',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
