import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {deviceHeight, deviceWidth} from '../../../utils/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  webView: {
    width: deviceWidth,
    height: deviceHeight,
  },

  loaderView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    height: deviceHeight,
  },

  loader: {
    color: Colors.purplishPink,
  },
});
