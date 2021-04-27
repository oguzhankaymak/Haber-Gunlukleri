import Fonts from '../../../../theme/Fonts';
import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 90,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  titleText: {
    fontSize: Fonts.size.h15,
    fontWeight: 'bold',
  },

  icon: {
    height: 20,
    width: 20,
  },

  line: {
    backgroundColor: Colors.darkLine,
    height: 0.5,
  },

  valueText: {
    padding: 10,
  },
});
