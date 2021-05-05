import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import Checkbox from '../../../checkbox/Checkbox';
import {COUNTRY} from '../../../../mocks/Data';
import styles from './styles/CountryStyle';
import {changeCountry} from '../../../../redux/news/Actions';

const Country = ({activeCountry}) => {
  const dispatch = useDispatch();

  const onPressChangeCountry = value => {
    dispatch(changeCountry(value));
  };

  const renderCountryItem = ({item}) => (
    <View style={styles.item}>
      <Checkbox
        active={activeCountry?.key === item.key}
        item={item}
        type={'country'}
        onPress={value => onPressChangeCountry(value)}
      />
    </View>
  );

  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={COUNTRY}
      renderItem={renderCountryItem}
    />
  );
};

export default React.memo(Country);
