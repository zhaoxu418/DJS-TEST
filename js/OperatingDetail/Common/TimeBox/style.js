import {
  StyleSheet,
} from 'react-native';

import commonStyles from '../style';

export default StyleSheet.create({
  box: {
    ...commonStyles.box,
    flexDirection: 'row',
  },
  timePicker: {
    ...commonStyles.box,
    borderWidth: 0,
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  triangle: {
    borderTopWidth: 5,
    borderTopColor: '#d8d8d8',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    height: 0,
    width: 0,
  },
  time: {
    fontSize: 20,
    color: '#1e1e1e',
  },
  loadTriangle: {
    width: commonStyles.box.height,
    height: commonStyles.box.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadTime: {
    width: commonStyles.box.width - commonStyles.box.height,
    height: commonStyles.box.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
