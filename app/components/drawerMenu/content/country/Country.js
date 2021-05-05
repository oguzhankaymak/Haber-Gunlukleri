import React from 'react';
import {View, FlatList} from 'react-native';
import Checkbox from '../../../checkbox/Checkbox';
import {COUNTRY} from '../../../../mocks/Data';

import styles from './styles/CountryStyle';

const Country = () => {
  const key = 'tr';
  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox active={key === item.key} name={item.name} type={'country'} />
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

export default Country;
