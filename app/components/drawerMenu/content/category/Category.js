import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import {changeCategory} from '../../../../redux/news/Actions';
import Checkbox from '../../../checkbox/Checkbox';
import {CATEGORY} from '../../../../mocks/Data';
import styles from './styles/CategoryStyle';

const Category = ({activeCategory}) => {
  const dispatch = useDispatch();

  const onPressChangeCategory = value => {
    dispatch(changeCategory(value));
  };

  const renderCategoryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox
        active={activeCategory?.key === item.key}
        item={item}
        type={'category'}
        onPress={value => onPressChangeCategory(value)}
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
