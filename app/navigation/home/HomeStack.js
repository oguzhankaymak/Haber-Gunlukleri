import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';
import DetailScreen from '../../screens/detail/DetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
          header: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
