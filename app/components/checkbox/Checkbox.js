import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/CheckboxStyle';

const Checkbox = ({active, item, type = 'country', onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      disabled={active}
      style={[
        styles.button,
        active
          ? type === 'country'
            ? styles.activeCountryButton
            : styles.activeCategoryButton
          : null,
      ]}>
      <View
        style={
          type === 'country'
            ? styles.countryBigCircle
            : styles.categoryBigCircle
        }>
        {active && <View style={styles.smallCircle} />}
      </View>
      <Text style={styles.nameText}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
