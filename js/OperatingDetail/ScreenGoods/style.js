import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screemWidth = Dimensions.get('window').width;// 拿到屏幕的宽度，和高度
const screenHeight = Dimensions.get('window').height;// 拿到屏幕的宽度，和高度
const buttonWidth = ((screemWidth / 2) - (30 * 2) - (15 * 2)) / 3;

export default StyleSheet.create({
  contain: {
    padding: 30,
  },
  commonRowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5,
  },
  buttonNormal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth,
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 3,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  buttonSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth,
    height: 50,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: '#fc6b10',
  },
  buttonCommon: {
    marginLeft: 15,
  },
  buttonTextNormal: {
    fontSize: 22,
    color: '#1E1E1E',
  },
  buttonTextSelected: {
    fontSize: 22,
    color: 'white',
  },
  listView: {
    height: screenHeight - 27 - 30 - 20,
  },
});
