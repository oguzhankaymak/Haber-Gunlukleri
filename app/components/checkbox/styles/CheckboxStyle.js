import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

export default StyleSheet.create({
  button: {
    height: 45,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },

  activeCountryButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.purplishPink,
  },

  activeCategoryButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.hotPink,
  },

  countryBigCircle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.purplishPink,
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryBigCircle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.hotPink,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: Colors.white,
  },

  nameText: {
    color: Colors.white,
    marginLeft: 10,
  },
});
