import React, {useState} from 'react';
import {Home, Services, News, Contact} from '../screens';
import {COLORS, globalStyles, ICONS, ROUTES} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/drawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        //Hide All Drawer Screen Header
        headerShown: false,
        // Selected item or screen background color
        drawerActiveBackgroundColor: COLORS.blueBackground,
        // Selected item or screen name color
        drawerActiveTintColor: COLORS.blue,
        drawerStyle: {
          borderTopRightRadius: 26,
          borderBottomRightRadius: 26,
          width: '68%',
        },
        drawerItemStyle: {
          marginVertical: 1,
        },
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          // color: COLORS.black,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={Home}
        options={{
          title: 'Dashboard',
          drawerIcon: ({focused, color, size}) => (
            <ICONS
              iconFamily="ionicons"
              name="home-sharp"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.SERVICES_DRAWER}
        component={Services}
        options={{
          title: 'Services',
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="cube-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NEWS_DRAWER}
        component={News}
        options={{
          title: 'News and Updates',
          drawerIcon: ({focused, color, size}) => (
            <ICONS
              iconFamily="ionicons"
              name="document-text-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CONTACT_DRAWER}
        component={Contact}
        options={{
          title: 'Contacts Us',
          drawerIcon: ({focused, color, size}) => (
            <ICONS
              iconFamily="ionicons"
              name="chatbox-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
