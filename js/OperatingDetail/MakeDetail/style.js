import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度

export default StyleSheet.create({
  contain: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  listView: {
    height: screenHeight - ((50 * 2) + (20 * 3) + 1.5 + 27 + 20) - 27 - 40,
    marginTop: 15,
  },
  rowNormal: {
    height: 90,
    backgroundColor: 'white',
    marginBottom: 20,
    width: (screemWidth / 2) - (30 * 2),
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#e8e8e8',
  },
  commonRowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  state: {
    position: 'absolute',
    left: 22,
    bottom: 10,
    width: (screemWidth / 2) - (30 * 2) - (22 * 2),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishName: {
    fontSize: 22,
    marginLeft: 22,
    marginTop: 10,
    color: '#1e1e1e',
  },
  dishState: {
    fontSize: 22,
    marginRight: 22,
    marginTop: 10,
    color: '#ff5200',
  },
});
