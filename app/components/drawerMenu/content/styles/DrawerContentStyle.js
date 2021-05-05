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
    paddingTop: 20,
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

  content: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 8,
  },

  list: {
    paddingTop: 60,
  },

  secondCard: {
    marginTop: 80,
  },

  categoryList: {
    paddingTop: 30,
  },

  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },

  cancelText: {
    color: Colors.webGray,
    fontSize: Fonts.size.h2,
  },
});
