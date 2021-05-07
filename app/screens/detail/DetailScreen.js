import React, {useState} from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';

import {WebView} from 'react-native-webview';
import styles from './styles/DetailScreenStyle';

const DetailScreen = ({navigation, route}) => {
  const renderLoadingView = () => (
    <View style={styles.loaderView}>
      <ActivityIndicator size="large" color={styles.loader.color} />
    </View>
  );
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['http://*', 'https://*']}
        source={{uri: route?.params.url}}
        startInLoadingState
        renderLoading={renderLoadingView}
        onError={event =>
          Alert.alert(
            'Maalesef Bir Hata Oluştu!',
            'Lütfen daha sonra tekrar deneyiniz.',
            [{text: 'OK', onPress: () => navigation.goBack()}],
          )
        }
        style={styles.webView}
      />
    </View>
  );
};

export default DetailScreen;
