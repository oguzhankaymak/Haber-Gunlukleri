import React from 'react';
import {View, FlatList} from 'react-native';
import Checkbox from '../../../checkbox/Checkbox';
import {COUNTRY} from '../../../../mocks/Data';

import styles from './styles/CountryStyle';

const Country = ({activeCountry}) => {
  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox
        active={activeCountry?.key === item.key}
        name={item.name}
        type={'country'}
      />
    </View>
  );

  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={COUNTRY}
      renderItem={renderCategoryItem}
    />
  );
};

export default React.memo(Country);
