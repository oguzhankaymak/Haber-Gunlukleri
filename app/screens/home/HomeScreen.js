import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  categoryDataMemo,
  countryDataMemo,
  isLoadingDataMemo,
  newsDataMemo,
} from '../../redux/news/Selectors';

import styles from './styles/HomeScreenStyles';
import NewsCard from '../../components/home/NewsCard';
import {getNews} from '../../redux/news/Actions';
import CardLoader from '../../components/home/cardLoader/CardLoader';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const news = useSelector(newsDataMemo);
  const category = useSelector(categoryDataMemo);
  const country = useSelector(countryDataMemo);
  const isLoading = useSelector(isLoadingDataMemo);

  useEffect(() => {
    dispatch(getNews());
  }, [category, country]);

  const renderItem = ({item}) => (
    <View style={styles.itemStyle}>
      <NewsCard
        title={item.title}
        description={item.description}
        image={item.urlToImage}
        source={item.source.name}
        url={item.url}
        onPress={url => navigation.navigate('DetailScreen', {url})}
      />
    </View>
  );

  const _renderContent = () => {
    if (isLoading) {
      return (
        <>
          <CardLoader />
          <CardLoader />
        </>
      );
    } else if (news && Array.isArray(news)) {
      return (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
        />
      );
    } else {
      return (
        <View style={styles.noContent}>
          <Text>Haber Bulunamadı!</Text>
          <Text>API KEY girmeyi unutmayınız...</Text>
        </View>
      );
    }
  };

  return <View style={styles.container}>{_renderContent()}</View>;
};

export default HomeScreen;
