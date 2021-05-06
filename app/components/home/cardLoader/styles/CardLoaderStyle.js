import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';
import {deviceWidth} from '../../../../utils/Metrics';

export default StyleSheet.create({
  loaderCard: {
    marginTop: 50,
    width: deviceWidth - 80,
    backgroundColor: Colors.white,
    height: 250,
    elevation: 6,
    borderRadius: 20,
  },

  loaderCardImage: {
    width: deviceWidth - 80,
    height: 120,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  loaderContent: {
    padding: 20,
  },

  loaderCardTitle: {
    height: 15,
    marginBottom: 18,
  },

  loaderText: {
    width: deviceWidth - 120,
    marginTop: 4,
    height: 7,
  },

  loaderSourceText: {
    width: 50,
    marginTop: 20,
    height: 7,
  },
});
