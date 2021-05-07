import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './home/HomeStack';
import DetailScreen from '../screens/detail/DetailScreen';
import Colors from '../theme/Colors';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            title: null,
            headerStyle: {
              backgroundColor: Colors.black,
            },
            headerTintColor: Colors.white,
            headerStatusBarHeight: 1,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
