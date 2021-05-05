import React from 'react';
import {View, FlatList} from 'react-native';
import Checkbox from '../../../checkbox/Checkbox';
import {COUNTRY} from '../../../../mocks/Data';

import styles from './styles/CategoryStyle';

const Category = () => {
  const key = 'tr';
  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox active={key === item.key} name={item.name} />
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

export default Category;
