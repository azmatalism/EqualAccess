import React, {useState} from 'react';
import {Home, Services, News, Contact} from '../screens/screens';
import {
  COLORS,
  globalFont,
  globalStyles,
  ICONS,
  ROUTES,
} from '../constants/constant';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/drawerContent/DrawerContent';
import {useAppContext} from '../theme/AppContext';
import {useTheme} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  const font = globalFont();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.blueBackground,
        drawerActiveTintColor: COLORS.blue,
        drawerInactiveTintColor: COLORS.black,
        drawerStyle: {
          borderTopRightRadius: 26,
          borderBottomRightRadius: 26,
          width: '68%',
        },
        drawerItemStyle: {
          marginVertical: 1,
          borderRadius: 8,
        },
        drawerLabelStyle: {
          fontSize,
          color: colors.text,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={Home}
        options={{
          title: 'Dashboard',
          drawerIcon: () => (
            <ICONS
              iconFamily="ionicons"
              name="home-sharp"
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.SERVICES_DRAWER}
        component={Services}
        options={{
          title: 'Services',
          drawerIcon: () => (
            <ICONS
              iconFamily="ionicons"
              name="cube-outline"
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NEWS_DRAWER}
        component={News}
        options={{
          title: 'News and Updates',
          drawerIcon: () => (
            <ICONS
              iconFamily="ionicons"
              name="document-text-outline"
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CONTACT_DRAWER}
        component={Contact}
        options={{
          title: 'Contacts Us',
          drawerIcon: () => (
            <ICONS
              iconFamily="ionicons"
              name="chatbox-outline"
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
