import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles/HomeScreenStyles';
import NewsCard from '../../components/home/NewsCard';
import {getNews} from '../../redux/news/Actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.news.news);

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(getNews('tr', 'sports'));
    }
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemStyle}>
      <NewsCard
        title={item.title}
        description={item.description}
        image={item.urlToImage}
        source={item.source.name}
        url={item.url}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
