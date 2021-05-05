import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../theme/Colors';

import {NewspaperIcon} from '../../icons';
import DrawerCard from '../card/DrawerCard';
import Category from './category/Category';
import Constants from './constants/Constants';
import Country from './country/Country';
import styles from './styles/DrawerContentStyle';

const DrawerContent = props => {
  const [contentType, setContentType] = useState(Constants.LIST);

  const _renderHeader = () => (
    <View style={styles.header}>
      <NewspaperIcon
        stroke={styles.icon.color}
        width={styles.icon.width}
        height={styles.icon.height}
      />
      <Text style={styles.titleText}>Son Haber</Text>
      <Text style={styles.descriptionText}>Son Haberler Artık Cebinizde!</Text>
    </View>
  );

  const _renderContent = () => {
    if (contentType === Constants.LIST) {
      return (
        <View style={styles.list}>
          <DrawerCard
            title={'Ülke'}
            value={'Türkiye'}
            backgroundColor={Colors.purplishPink}
            color={Colors.white}
            onPress={() => setContentType(Constants.COUNTRY_LIST)}
          />
          <View style={styles.secondCard}>
            <DrawerCard
              title={'Kategori'}
              value={'Teknoloji'}
              backgroundColor={Colors.hotPink}
              color={Colors.white}
              onPress={() => setContentType(Constants.CATEGORY_LIST)}
            />
          </View>
        </View>
      );
    } else if (contentType === Constants.COUNTRY_LIST) {
      return (
        <View style={styles.categoryList}>
          <Country />
        </View>
      );
    } else if (contentType === Constants.CATEGORY_LIST) {
      return (
        <View style={styles.categoryList}>
          <Category />
        </View>
      );
    }
  };

  const _renderFooter = () => {
    if (contentType !== Constants.LIST) {
      return (
        <>
          <View style={styles.line} />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.footer}
            onPress={() => setContentType(Constants.LIST)}>
            <Text style={styles.cancelText}>Vazgeç</Text>
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.line} />
      <View style={styles.content}>{_renderContent()}</View>
      {_renderFooter()}
    </View>
  );
};

export default DrawerContent;
