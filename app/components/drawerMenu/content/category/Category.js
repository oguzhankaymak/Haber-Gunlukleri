import React from 'react';
import {View, FlatList} from 'react-native';
import Checkbox from '../../../checkbox/Checkbox';
import {CATEGORY} from '../../../../mocks/Data';

import styles from './styles/CategoryStyle';

const Category = ({activeCategory}) => {
  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox
        active={activeCategory?.key === item.key}
        name={item.name}
        type={'category'}
      />
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

export default React.memo(Category);
