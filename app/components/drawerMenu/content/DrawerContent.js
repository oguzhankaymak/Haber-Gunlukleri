import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../../theme/Colors';

import {NewspaperIcon} from '../../icons';
import DrawerCard from '../card/DrawerCard';
import styles from './styles/DrawerContentStyle';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NewspaperIcon
          stroke={styles.icon.color}
          width={styles.icon.width}
          height={styles.icon.height}
        />
        <Text style={styles.titleText}>Son Haber</Text>
        <Text style={styles.descriptionText}>
          Son Haberler Artık Cebinizde!
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.cards}>
        <DrawerCard
          title={'Ülke'}
          value={'Türkiye'}
          backgroundColor={Colors.purplishPink}
          color={Colors.white}
        />
        <View style={styles.secondCard}>
          <DrawerCard
            title={'Kategori'}
            value={'Teknoloji'}
            backgroundColor={Colors.hotPink}
            color={Colors.white}
          />
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;
