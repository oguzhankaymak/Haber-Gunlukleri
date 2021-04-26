import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ArrowRightIcon} from '../icons';

import styles from './styles/NewsCardStyle';

const NewsCard = ({title, description, image, source, url}) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.content}>
          <TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.sourceText}>{source}</Text>
        </View>

        <TouchableOpacity style={styles.detailBtn}>
          <Text style={styles.detailText}>
            <ArrowRightIcon
              stroke={styles.icon.color}
              width={styles.icon.width}
              height={styles.icon.height}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
