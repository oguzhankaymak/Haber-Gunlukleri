import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SwitchIcon} from '../../icons';

import styles from './styles/DrawerCardStyle';

const DrawerCard = ({title, value, backgroundColor, color}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.card}>
        <Text style={[styles.titleText, {color: color}]}>{title}</Text>
        <SwitchIcon
          width={styles.icon.width}
          height={styles.icon.height}
          stroke={color}
        />
      </View>
      <View style={styles.line} />
      <Text style={[styles.valueText, {color: color}]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default DrawerCard;
