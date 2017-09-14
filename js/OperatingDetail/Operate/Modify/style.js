import {
  StyleSheet,
} from 'react-native';

import commonStyle from '../../Common/style';

export default StyleSheet.create({
  contain: {
    backgroundColor: 'transparent',
  },
  box: commonStyle.box,
  button: {
    height: 50,
    backgroundColor: '#fc6b10',
    marginTop: 30,
    borderRadius: 4,
  },
  keyboard: {
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
