import React from 'react';
import {View, FlatList} from 'react-native';
import Checkbox from '../../../checkbox/Checkbox';
import {CATEGORY} from '../../../../mocks/Data';

import styles from './styles/CategoryStyle';

const Category = () => {
  const key = 'science';
  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox active={key === item.key} name={item.name} type={'category'} />
    </View>
  );

  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={CATEGORY}
      renderItem={renderCategoryItem}
    />
  );
};

export default Category;
