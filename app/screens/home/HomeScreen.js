import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {newsDataMemo} from '../../redux/news/Selectors';

import styles from './styles/HomeScreenStyles';
import NewsCard from '../../components/home/NewsCard';
import {getNews} from '../../redux/news/Actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector(newsDataMemo);

  useEffect(() => {
    if (!news || news.length === 0) {
      dispatch(getNews());
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
        data={news}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
