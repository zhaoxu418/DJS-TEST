import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
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
  textView: {
    height: 47.5,
    width: ScreenWidth,
    borderBottomWidth: 1,
    borderColor: '#ececec',
    justifyContent: 'center',
  },
  rightIcon: {
    color: 'rgb(136, 136, 136)',
    fontSize: 14,
    top: 1,
    marginRight: 8,
  },
  shift: {
    flex: 5,
    left: 15,
    fontSize: 16,
    color: '#333333',
  },
  especial: {
    flex: 3,
    color: '#ff3b30',
    fontSize: 14,
  },
  state: {
    flex: 2,
    fontSize: 14,
    color: '#8b8b8b',
  },
  button: {
    width: 50,
    height: 20,
    borderWidth: 1,
    borderColor: '#82a0fa',
    marginRight: 5,
    borderRadius: 3,
  },
  noneButton: {
    width: 50,
    height: 20,
    borderWidth: 1,
    borderColor: 'rgb(235, 235, 235)',
    marginRight: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 10,
    color: '#82a0fa',
  },
  noneButtonText: {
    fontSize: 10,
    color: 'rgb(235, 235, 235)',
  },
});
