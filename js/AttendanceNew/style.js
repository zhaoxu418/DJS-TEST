import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numView: {
    height: 40,
    width: ScreenWidth,
    borderBottomWidth: 1,
    borderColor: '#ececec',
  },
});
