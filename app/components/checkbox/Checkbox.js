import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/CheckboxStyle';

const Checkbox = ({active, id, name}) => {
  return (
    <TouchableOpacity style={[styles.button, active && styles.activeButton]}>
      <View style={styles.bigCircle}>
        {active && <View style={styles.smallCircle} />}
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
