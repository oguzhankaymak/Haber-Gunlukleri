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

  activeButton: {
    borderWidth: 1,
    borderColor: Colors.purplishPink,
    borderRadius: 10,
  },

  bigCircle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.webGray,
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
