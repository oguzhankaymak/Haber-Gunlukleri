import {StyleSheet} from 'react-native';
import Colors from '../../../../theme/Colors';
import Fonts from '../../../../theme/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 130,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  icon: {
    color: Colors.white,
    height: 32,
    width: 32,
  },

  titleText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: Fonts.size.h18,
  },

  descriptionText: {
    color: Colors.white,
    fontSize: Fonts.size.h12,
  },

  line: {
    backgroundColor: Colors.darkLine,
    height: 0.5,
  },

  cards: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 70,
    paddingHorizontal: 8,
  },

  secondCard: {
    marginTop: 80,
  },
});
