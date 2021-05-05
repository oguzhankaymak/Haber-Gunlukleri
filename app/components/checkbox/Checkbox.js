import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/CheckboxStyle';

const Checkbox = ({active, id, name, type = 'country'}) => {
  return (
    <TouchableOpacity
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
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
