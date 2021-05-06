import React from 'react';
import {View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from './styles/CardLoaderStyle';

const CardLoader = () => {
  return (
    <View style={styles.loaderCard}>
      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
        style={styles.loaderCardImage}
      />
      <View style={styles.loaderContent}>
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.loaderCardTitle}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.loaderText}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.loaderText}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.loaderText}
        />
        <ShimmerPlaceHolder
          LinearGradient={LinearGradient}
          style={styles.loaderSourceText}
        />
      </View>
    </View>
  );
};

export default CardLoader;
