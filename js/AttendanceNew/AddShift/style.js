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
  rowView: {
    height: 50,
    width: ScreenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#1e1e1e',
  },
});
