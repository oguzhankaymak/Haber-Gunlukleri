import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './styles/HomeScreenStyles';
import NewsCard from '../../components/home/NewsCard';

const HomeScreen = () => {
  const data = [];

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
