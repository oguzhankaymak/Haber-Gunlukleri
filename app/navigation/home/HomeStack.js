import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../../screens/home/HomeScreen';
import DrawerContent from '../../components/drawerMenu/content/DrawerContent';
import Colors from '../../theme/Colors';
import {widthPercentageToDP as wp} from '../../utils/PercentageCalculator';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{width: wp('65%')}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Son Haber',
          headerStyle: {
            backgroundColor: Colors.black,
            justifyContent: 'center',
          },
          headerTintColor: Colors.white,
          headerStatusBarHeight: 1,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeStack;
