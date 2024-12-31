import React from 'react';
import {Splash, Services, News, Contact} from '../screens/screens';
import {COLORS, ROUTES} from '../constants/constant';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // statusBarColor: COLORS.primary,
        // headerTintColor: COLORS.white,
        // headerTitleAlign: 'center',
        // headerBackTitleVisible: false,
        // headerStyle: {
        //   backgroundColor: COLORS.primary,
        // },
        headerShown: false,
      }}
      initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigation} />
      <Stack.Screen name={ROUTES.SERVICES_TAB} component={Services} />
      <Stack.Screen name={ROUTES.NEWS_TAB} component={News} />
      <Stack.Screen name={ROUTES.CONTACT_TAB} component={Contact} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
