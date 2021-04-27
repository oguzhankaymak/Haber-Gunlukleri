import {deviceWidth} from '../../../utils/Metrics';
import Fonts from '../../../theme/Fonts';
import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

export default StyleSheet.create({
  shadow: {
    flex: 1,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
  },

  container: {
    width: deviceWidth - 60,
    backgroundColor: Colors.white,
    elevation: 6,
    borderRadius: 20,
  },

  image: {
    width: deviceWidth - 60,
    height: 180,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  titleText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: Fonts.size.h16,
  },

  content: {
    padding: 20,
  },

  descriptionText: {
    marginTop: 10,
    fontSize: Fonts.size.h14,
    lineHeight: 25,
  },

  sourceText: {
    color: Colors.webGray,
    marginTop: 10,
    fontSize: Fonts.size.h12,
  },

  detailBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  detailText: {
    color: Colors.white,
  },

  icon: {
    width: 19,
    height: 19,
    color: Colors.white,
  },
});
